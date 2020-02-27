const runModifier = require("./run-modifier");

class ProxyMeta {
  constructor() {
    this._middlewares = [];
  }

  use(middleware) {
    this._middlewares.push(middleware);
  }

  async run(request) {
    const proxyMeta = await runModifier(request, {
      middlewares: this._middlewares
    });

    return proxyMeta;
  }
}

module.exports = ProxyMeta;
