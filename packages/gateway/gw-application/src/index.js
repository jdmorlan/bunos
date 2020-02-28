const Target = require("./target");

class Application {
  constructor(application) {
    this._app = application;
  }

  get id() {
    return this._app.id;
  }

  get name() {
    return this._app.name;
  }

  get target() {
    return new Target(this._app.target);
  }

  toJS() {
    return this._app;
  }
}

module.exports = Application;
