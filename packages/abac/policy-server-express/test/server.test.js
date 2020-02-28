const request = require("supertest");

const buildApp = require("../src");
const MemoryPolicyStore = require("../../policy-store-memory");

const policies = [
  {
    id: "12345",
    resource: "activity",
    action: "create",
    conditions: {
      type: "EQUALS",
      params: [
        { type: "CONSTANT", value: "jay" },
        { type: "JSONPATH", value: "$.user.name" }
      ]
    }
  }
];

describe("Policy Server", () => {
  test("can get policy", done => {
    const app = buildApp({ store: new MemoryPolicyStore({ policies }) });

    request(app)
      .get("/12345")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body.policy.id).toBe("12345");
        done();
      });
  });

  test("get 404 when no policy exists", done => {
    const app = buildApp({ store: new MemoryPolicyStore() });

    request(app)
      .get("/884773")
      .expect(404)
      .then(() => done());
  });

  test("can search policies", done => {
    const app = buildApp({ store: new MemoryPolicyStore({ policies }) });

    request(app)
      .post("/search")
      .send({ resource: "activity", action: "create" })
      .expect(200)
      .then(response => {
        expect(response.body.policy.id).toBe("12345");
        done();
      });
  });

  test("can add policy", done => {
    const app = buildApp({ store: new MemoryPolicyStore() });

    request(app)
      .post("/")
      .send({ id: "54321", resource: "activity", action: "update" })
      .expect(201)
      .then(response => {
        request(app)
          .get("/54321")
          .then(response => {
            expect(response.body.policy.id).toBe("54321");
            done();
          });
      });
  });

  test("can update policy", done => {
    const app = buildApp({ store: new MemoryPolicyStore({ policies }) });

    request(app)
      .patch("/12345")
      .send({ resource: "activity", action: "new" })
      .expect(200)
      .then(response => {
        expect(response.body.policy.id).toBe("12345");
        expect(response.body.policy.action).toBe("new");

        done();
      });
  });

  test("can archive policy", done => {
    const app = buildApp({ store: new MemoryPolicyStore({ policies }) });

    request(app)
      .delete("/12345")
      .expect(204)
      .then(response => {
        request(app)
          .get("/12345")
          .expect(404)
          .then(() => done());
      });
  });
});
