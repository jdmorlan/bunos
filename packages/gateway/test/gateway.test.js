const express = require("express");
const httpMocks = require("node-mocks-http");
const request = require("supertest");

const { buildGateway, InvalidGatewayOptions } = require("../src");
const HttpResponder = require("@bunos/responder-http");
const MemoryAppStore = require("@bunos/app-store-memory");
const appPathModifier = require("@bunos/modifier-app-path");

const buildServer = (port = 4001) => {
  const app = express();

  app.get("/activities/:id", (request, response) => {
    response.json({ name: "Jay" });
  });

  return app.listen(port);
};

const applications = [
  {
    id: 12345,
    name: "eog",
    environment: "stage",
    target: {
      type: "SERVER",
      url: "http://localhost:4001"
    }
  }
];

describe("Gateway", () => {
  describe("Build Gateway", () => {
    test("can build", () => {
      const gateway = buildGateway({
        appStore: new MemoryAppStore(),
        environment: "stage"
      });

      expect(typeof gateway.run).toBe("function");
    });

    test("can apply modifiers", () => {
      const gateway = buildGateway({
        appStore: new MemoryAppStore(),
        environment: "stage",
        modifiers: [appPathModifier]
      });

      expect(gateway.modifier.size).toBe(1);
    });

    test("can apply responders", () => {
      const gateway = buildGateway({
        appStore: new MemoryAppStore(),
        environment: "stage",
        responders: [HttpResponder]
      });

      expect(gateway.responder.keys).toContain("SERVER");
      expect(gateway.responder.size).toBe(1);
    });

    test("must pass environment opt", () => {
      expect(() => {
        buildGateway({
          appStore: new MemoryAppStore()
        });
      }).toThrow(InvalidGatewayOptions);
    });
  });

  describe("Metadata", () => {
    test("App Found", async () => {
      const gateway = buildGateway({
        appStore: new MemoryAppStore({ apps: applications }),
        environment: "stage"
      });

      gateway.useModifier(appPathModifier);
      const request = httpMocks.createRequest({
        method: "GET",
        url: "/eog/activities/1234"
      });

      const meta = await gateway.getMeta(request);

      expect(meta.found).toBe(true);
      expect(meta.data.application.name).toBe("eog");
    });
    test("App Not Found", async () => {
      const gateway = buildGateway({
        appStore: new MemoryAppStore(),
        environment: "stage"
      });

      gateway.useModifier(appPathModifier);
      const request = httpMocks.createRequest({
        method: "GET",
        url: "/eog/activities/1234"
      });

      const meta = await gateway.getMeta(request);

      expect(meta.found).toBe(false);
      expect(meta.data.modification.application).toBe("eog");
    });
  });

  describe("Serving", () => {
    test("HTTP Responder Workflow", done => {
      const server = buildServer();

      const gateway = buildGateway({
        appStore: new MemoryAppStore({ apps: applications }),
        environment: "stage"
      });

      gateway.useModifier(appPathModifier);
      gateway.useResponder(HttpResponder);

      const app = express();
      app.use(gateway.run);

      request(app)
        .get("/eog/activities/1234")
        .expect(200)
        .then(() => {
          server.close();
          done();
        });
    });
  });
});
