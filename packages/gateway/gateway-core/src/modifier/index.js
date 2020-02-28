const runModifier = require("./run-modifier");

class Modifier {
  constructor() {
    this._middlewares = [];
  }

  use(middleware) {
    this._middlewares.push(middleware);
  }

  get size() {
    return this._middlewares.length;
  }

  async run(request) {
    const modificationResult = await runModifier(request, {
      middlewares: this._middlewares
    });

    return modificationResult;
  }
}

module.exports = Modifier;
