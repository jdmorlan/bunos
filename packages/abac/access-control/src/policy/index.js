const get = require("lodash/get");
const isEmpty = require("lodash/isEmpty");
const Condition = require("../condition");
const PolicyCheck = require("./policy-check");

class Policy {
  constructor(policy) {
    this._policy = policy;
    this._conditionHandlers = [];
  }

  setConditionHandlers(handlers) {
    this._conditionHandlers = handlers;
  }

  get resource() {
    return this._policy.resource;
  }

  get action() {
    return this._policy.action;
  }

  get conditions() {
    const conditions = get(this._policy, "conditions", []);
    return conditions.map(
      condition =>
        new Condition({
          ...condition,
          conditionHandlers: this._conditionHandlers
        })
    );
  }

  toJS() {
    return this._policy;
  }

  async can(context) {
    if (isEmpty(this.conditions)) {
      return { granted: false };
    }

    const conditions = this.conditions;
    const results = [];

    for (const condition of conditions) {
      const { valid } = await condition.isValid(context);
      results.push(valid);
    }

    const valid = results.every(x => x === true);
    return { granted: valid };
  }
}

module.exports = { Policy, PolicyCheck };
