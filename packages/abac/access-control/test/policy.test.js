const { Policy } = require("../src/policy");
const EqualsCondition = require("@bunos/condition-equals");
const ContainsCondition = require("@bunos/condition-contains");

const conditionHandlers = [EqualsCondition, ContainsCondition];

const basicPolicy = {
  resource: "system",
  action: "enter-maintenance-mode",
  conditions: [
    {
      type: "EQUALS",
      excludes: [
        {
          type: "EQUALS",
          params: [
            { type: "CONSTANT", value: true },
            { type: "JSONPATH", value: "$.user.exclude" }
          ]
        }
      ],
      params: [
        { type: "CONSTANT", value: "admin" },
        { type: "JSONPATH", value: "$.user.role" }
      ]
    }
  ]
};

describe("Policy", () => {
  test("Valid Policy", async () => {
    const context = { user: { role: "admin" } };

    const policy = new Policy(basicPolicy);
    policy.setConditionHandlers(conditionHandlers);
    const result = await policy.can(context);

    expect(result.granted).toBe(true);
  });

  test("Invalid Policy", async () => {
    const context = { user: { role: "user" } };

    const policy = new Policy(basicPolicy);
    policy.setConditionHandlers(conditionHandlers);
    const result = await policy.can(context);

    expect(result.granted).toBe(false);
  });
});
