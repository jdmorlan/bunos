const handlers = require("./handlers");
const isNil = require("lodash/isNil");

class ConditionParameter {
  constructor(param, key = null) {
    this._param = param;
    this._key = key;
  }

  get key() {
    return this._key;
  }

  get type() {
    if (isNil(this._param.type)) {
      return "CONSTANT";
    }

    return this._param.type;
  }

  value(context) {
    const handler = handlers[this.type];
    return handler(this._param, context);
  }
}

module.exports = ConditionParameter;
