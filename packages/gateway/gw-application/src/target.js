class Target {
  constructor(target) {
    this._target = target;
  }

  get type() {
    return this._target.type;
  }

  get url() {
    return this._target.url;
  }

  attributes(key) {
    return this._target.attributes[key];
  }
}

module.exports = Target;
