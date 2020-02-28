const ConditionParameter = require("../src/condition/condition-parameter");

describe("ConditionParameter", () => {
  test("Constant Type Parameter", () => {
    const args = { type: "CONSTANT", value: "Jay" };
    const param = new ConditionParameter(args);

    expect(param.value()).toBe("Jay");
  });

  test("Implicit Constant Type Parameter", () => {
    const args = { value: "Jay" };
    const param = new ConditionParameter(args);

    expect(param.value()).toBe("Jay");
  });

  test("JSON Path Type Parameter", () => {
    const args = { type: "JSONPATH", value: "$.user.role" };
    const context = { user: { role: "admin" } };

    const param = new ConditionParameter(args);

    expect(param.value(context)).toBe("admin");
  });
});
