const { EventEmitter } = require("events");
const isObject = require("lodash/isObject");
const isNil = require("lodash/isNil");
const isFunction = require("lodash/isFunction");

class Responder extends EventEmitter {
  constructor() {
    super();
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

  getResponder(opts) {
    const { target } = opts;
    return this._responders.find(x => x.key === target.type);
  }

  process(opts) {
    const { response } = opts;
    const responder = this.getResponder(opts);

    if (isNil(responder)) {
      const { response } = opts;
      this.emit("not-found", opts);
      response.sendStatus(404);
    }

    response.on("finish", () => {
      this.emit("done", { responder, ...opts });
    });

    responder.run(opts);
  }
}

module.exports = Responder;
