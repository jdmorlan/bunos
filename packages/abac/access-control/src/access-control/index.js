const { PolicyCheck } = require("../policy");
const EqualCondition = require("@bunos/condition-equals");
const ContainsCondition = require("@bunos/condition-contains");

const defaultOptions = {
  conditionHandlers: [EqualCondition, ContainsCondition]
};

class AccessControl {
  constructor(opts) {
    const normOpts = { ...defaultOptions, ...opts };

    this._store = normOpts.store;
    this._conditionHandlers = normOpts.conditionHandlers;
  }

  get conditionHandlers() {
    return this._conditionHandlers;
  }

  can(user) {
    return new PolicyCheck({
      user,
      conditionHandlers: this._conditionHandlers,
      store: this._store
    });
  }
}

module.exports = AccessControl;
