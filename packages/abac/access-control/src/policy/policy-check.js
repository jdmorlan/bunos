class PolicyCheck {
  constructor(opts) {
    this._user = opts.user;
    this._store = opts.store;
    this._conditionHandlers = opts.conditionHandlers;
  }

  execute(action) {
    this._action = action;
    return this;
  }

  async on(resource, resourceContext) {
    const policy = await this._store.search({
      resource: resource,
      action: this._action
    });

    policy.setConditionHandlers(this._conditionHandlers);

    return await policy.can({ user: this._user, resource: resourceContext });
  }
}

module.exports = PolicyCheck;
