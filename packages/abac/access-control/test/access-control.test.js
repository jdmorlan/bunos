const AccessControl = require("../src/access-control");
const MemoryStore = require("../../policy-store-memory/src");
const EqualsCondition = require("@bunos/condition-equals");
const ContainsCondition = require("@bunos/condition-contains");

const policy = {
  resource: "activity",
  action: "create",
  conditions: [
    {
      type: "CONTAINS",
      params: {
        source: { type: "JSONPATH", value: "$.user.roles" },
        value: { type: "CONSTANT", value: "admin" }
      }
    },
    {
      type: "EQUALS",
      params: [
        { type: "JSONPATH", value: "$.resource.owner" },
        { type: "JSONPATH", value: "$.user.username" }
      ]
    }
  ]
};

describe("Access Control", () => {
  test("defaults condition handlers", () => {
    const ac = new AccessControl({
      store: new MemoryStore({ policies: [policy] })
    });

    expect(ac.conditionHandlers.length).toBe(2);
  });

  test("can do policy check", async () => {
    const ac = new AccessControl({
      store: new MemoryStore({ policies: [policy] })
    });

    const permission = await ac
      .can({ name: "Jay", roles: ["admin"], username: "jmorlan" })
      .execute("create")
      .on("activity", { owner: "jmorlan" });

    expect(permission.granted).toBe(true);
  });
});
