const { EventEmitter } = require("events");

class Gateway extends EventEmitter {
  constructor(opts = {}) {
    super();

    this._modifier = opts.modifier;
    this._responder = opts.responder;
    this._appStore = opts.appStore;
    this._environment = opts.environment;

    this.run = this.run.bind(this);
  }

  useModifier(middleware) {
    this._modifier.use(middleware);
  }

  useResponder(responder) {
    this._responder.register(responder);
  }

  async getMeta(request) {
    const modification = await this._modifier.run(request);
    const appMeta = await this._appStore.search({
      ...modification,
      environment: this._environment
    });

    if (!appMeta.found) {
      return {
        found: false,
        data: {
          modification,
          application: null
        }
      };
    }

    return {
      found: true,
      data: {
        modification,
        application: appMeta.application
      }
    };
  }

  async run(request, response) {
    const meta = await this.getMeta(request);

    if (!meta.found) {
      this.emit("not-found", meta.data);
      return response.sendStatus(404);
    }

    this._responder.on("done", event => {
      this.emit("done", { ...event, ...meta.data });
    });

    return this._responder.process({
      target: meta.data.application.target,
      modification: meta.data.modification,
      request,
      response
    });
  }
}

module.exports = Gateway;
