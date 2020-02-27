class Gateway {
  constructor() {
    this._modifier = opts.modifier;
    this._responder = opts.responder;
    this._appStore = opts.appStore;
  }

  useModifier(middleware) {
    this._modifier.use(middleware);
  }

  useResponder(responder) {
    this._responder.register(responder);
  }

  async run(request, response) {
    try {
      const modification = await this._modifier.run(request);
      const appMeta = await this._appStore.search(modification);

      if (!appMeta) {
        response.sendStatus(404);
      }

      return this._responder.process({
        target: appMeta.target,
        modification,
        request,
        response
      });
    } catch (error) {
      console.log(error);
      response.render("error");
    }
  }
}

module.exports = Gateway;
