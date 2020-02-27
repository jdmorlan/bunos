const isObject = require("lodash/isObject");

class Responder {
  constructor() {
    this._responders = [];
  }

  register(responder) {
    let responderKlass = null;

    if (isObject(responder)) {
      responderKlass = responder;
    }

    if (isFunction(responder)) {
      responderKlass = new responder();
    }

    if (responder === null) {
      throw new Error("InvalidResponder");
    }

    this._responders.push(responderKlass);
  }

  process(opts) {
    const { target } = opts;

    const responder = this._responders.find(x => x.key === target.type);
    responder.run(opts);
  }
}

module.exports = Responder;
