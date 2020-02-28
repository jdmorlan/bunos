const ConditionParameter = require("./condition-parameter");
const isEmpty = require("lodash/isEmpty");
const isArray = require("lodash/isArray");
const isObject = require("lodash/isObject");
const isFunction = require("lodash/isFunction");

const defaultOptions = {
  excludes: []
};

const initializeHandlers = (handlers, opts) => {
  if (!isArray(handlers)) {
    console.log(opts);
    console.log(handlers);
  }
  return handlers.map(handler => {
    if (isFunction(handler)) {
      return new handler();
    } else {
      return handler;
    }
  });
};

class Condition {
  constructor(opts) {
    const normOpts = { ...defaultOptions, ...opts };
    this._conditionHandlers = initializeHandlers(opts.conditionHandlers, opts);

    this._type = normOpts.type;
    this._excludes = normOpts.excludes;
    this._params = normOpts.params;
  }

  get parameters() {
    if (isArray(this._params)) {
      return this._params.map(param => new ConditionParameter(param));
    }

    if (isObject(this._params)) {
      return Object.entries(this._params).map(
        ([key, param]) => new ConditionParameter(param, key)
      );
    }

    throw new Error("Invalid Params");
  }

  get excludes() {
    return this._excludes.map(
      exclude =>
        new Condition({
          ...exclude,
          conditionHandlers: this._conditionHandlers
        })
    );
  }

  exclude(context) {
    if (isEmpty(this.excludes)) {
      return false;
    }

    const matches = this.excludes.map(condition => condition.isValid(context));
    return matches.every(x => x.valid === true);
  }

  isValid(context) {
    if (this.exclude(context)) {
      return { skipped: true, valid: true };
    }

    const handler = this._conditionHandlers.find(x => x.key === this._type);
    const valid = handler.run(this.parameters, context);

    return { skipped: false, valid };
  }
}

module.exports = Condition;
