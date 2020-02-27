const keyBy = require("lodash/keyBy");
const Application = require("./application");

class MemoryAppStore {
  constructor(opts = {}) {
    const apps = opts.apps || [];
    this._apps = keyBy(apps, "id");
  }

  async get(appId) {
    const application = this._apps[appId];
    return Promise.resolve(new Application(application));
  }

  async search(opts) {
    const { applicationName, environment } = opts;
    const application = this._apps.find(application => {
      return (
        application.name === applicationName &&
        application.environment === environment
      );
    });

    return Promise.resolve(new Application(application));
  }
}

module.exports = MemoryAppStore;
