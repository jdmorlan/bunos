const Condition = require("../src/condition");
const EqualsCondition = require("@bunos/condition-equals");
const ContainsCondition = require("@bunos/condition-contains");

describe("Condition", () => {
  test("Can skip condition", () => {
    const args = {
      type: "EQUALS",
      excludes: [
        {
          type: "EQUALS",
          params: [
            {
              type: "CONSTANT",
              value: true
            },
            {
              type: "JSONPATH",
              value: "$.user.exclude"
            }
          ]
        }
      ],
      params: [
        { type: "CONSTANT", value: "jay" },
        { type: "JSONPATH", value: "$.user.name" }
      ]
    };

    const context = { user: { name: "bob", exclude: true } };
    const condition = new Condition({
      ...args,
      conditionHandlers: [ContainsCondition, EqualsCondition]
    });

    const validation = condition.isValid(context);

    expect(validation.valid).toBe(true);
    expect(validation.skipped).toBe(true);
  });

  test("Valid Equals Condition", () => {
    const args = {
      type: "EQUALS",
      params: [
        { type: "CONSTANT", value: "jay" },
        { type: "JSONPATH", value: "$.user.name" }
      ]
    };

    const context = { user: { name: "jay" } };

    const condition = new Condition({
      ...args,
      conditionHandlers: [ContainsCondition, EqualsCondition]
    });
    const validation = condition.isValid(context);

    expect(validation.valid).toBe(true);
    expect(validation.skipped).toBe(false);
  });

  test("Invalid Equals Condition", () => {
    const args = {
      type: "EQUALS",
      params: [
        { type: "CONSTANT", value: "bob" },
        { type: "JSONPATH", value: "$.user.name" }
      ]
    };

    const context = { user: { name: "jay" } };

    const condition = new Condition({
      ...args,
      conditionHandlers: [ContainsCondition, EqualsCondition]
    });
    const validation = condition.isValid(context);

    expect(validation.valid).toBe(false);
    expect(validation.skipped).toBe(false);
  });

  test("Valid Contains Condition", () => {
    const args = {
      type: "CONTAINS",
      params: {
        source: { type: "JSONPATH", value: "$.user.roles" },
        value: { value: "admin" }
      }
    };

    const context = { user: { roles: ["admin"] } };

    const condition = new Condition({
      ...args,
      conditionHandlers: [ContainsCondition, EqualsCondition]
    });
    const validation = condition.isValid(context);

    expect(validation.valid).toBe(true);
    expect(validation.skipped).toBe(false);
  });

  test("Invalid Contains Condition", () => {
    const args = {
      type: "CONTAINS",
      params: {
        source: { type: "JSONPATH", value: "$.user.roles" },
        value: { value: "user" }
      }
    };

    const context = {
      user: {
        roles: ["admin"]
      }
    };

    const condition = new Condition({
      ...args,
      conditionHandlers: [ContainsCondition, EqualsCondition]
    });
    const validation = condition.isValid(context);

    expect(validation.valid).toBe(false);
    expect(validation.skipped).toBe(false);
  });
});
