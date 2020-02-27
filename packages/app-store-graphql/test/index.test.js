const express = require("express");
const request = require("supertest");
const uuid = require("uuid");

const MemoryAppStore = require("@bunos/app-store-memory");
const buildServer = require("../src");
const applications = require("./get-applications");

describe("App Store GraphQL", () => {
  describe("Mutation", () => {
    test("can add application", done => {
      const app = express();
      const server = buildServer({
        appStore: new MemoryAppStore({ apps: applications })
      });

      server.applyMiddleware({ app });

      const query = `
        mutation CreateApplication($app: AddApplicationInput!) {
          addApplication(application: $app) {
            id
            name
          }
        }
      `;

      const appId = uuid.v4();

      request(app)
        .post("/graphql")
        .send({
          query,
          variables: {
            app: {
              id: appId,
              name: "vendors",
              environment: "stage",
              target: {
                type: "SERVER",
                url: "http://localhost:4001",
                attributes: {}
              }
            }
          }
        })
        .then(response => {
          const application = response.body.data.addApplication;
          expect(application.id).toBe(appId);
          expect(application.name).toBe("vendors");

          done();
        });
    });
  });

  describe("Query", () => {
    test("can get application", done => {
      const app = express();
      const server = buildServer({
        appStore: new MemoryAppStore({ apps: applications })
      });

      server.applyMiddleware({ app });

      const query = `
        query {
          getApplication(id: "${applications[0].id}") {
            id
            name
            environment
          }
        }
      `;

      request(app)
        .post("/graphql")
        .send({ query })
        .then(response => {
          const application = response.body.data.getApplication;
          const refApplication = applications[0];

          expect(application.id).toBe(refApplication.id);
          expect(application.name).toBe(refApplication.name);
          expect(application.environment).toBe(refApplication.environment);

          done();
        });
    });
  });
});
