const keyBy = require("lodash/keyBy");
const Application = require("@bunos/gw-application");

const buildResponse = application => {
  if (!application) {
    return { found: false, application: null };
  }

  return {
    found: true,
    application: new Application(application)
  };
};

class MemoryAppStore {
  constructor(opts = {}) {
    const apps = opts.apps || [];
    this._apps = keyBy(apps, "id");
  }

  async get(appId) {
    const application = this._apps[appId];
    const response = buildResponse(application);

    return Promise.resolve(response);
  }

  async search(opts) {
    const apps = Object.values(this._apps);

    const application = apps.find(app => {
      return (
        app.name === opts.application && app.environment === opts.environment
      );
    });

    const response = buildResponse(application);
    return Promise.resolve(response);
  }
}

module.exports = MemoryAppStore;
