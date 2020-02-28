const express = require("express");
const request = require("supertest");
const Responder = require("../src");

const buildServer = (port = 4005) => {
  const app = express();

  app.get("/", (request, response) => {
    response.json({ name: "Jay" });
  });

  return app.listen(port);
};

describe("HTTP Proxy Responder", () => {
  test("it responds", done => {
    const responder = new Responder();

    const app = express();
    const server = buildServer();

    app.use((request, response) => {
      const target = {
        type: "SERVER",
        url: "http://localhost:4005"
      };

      responder.run({ target, request, response });
    });

    request(app)
      .get("/")
      .expect(200)
      .then(() => {
        server.close();
        done();
      });
  });
});
