const buildSocketServer = require("./build-socket-server");

const noop = () => {};
const resolver = value => () => Promise.resolve(value);

class Socket {
  constructor(opts) {
    this._store = opts.store;
    this._buildManagementApp = opts.buildManagementApp;
    this._getAccount = opts.getAccount;
    this._onMessage = opts.onMessage || noop;
    this._authenticate = opts.authenticate || resolver(true);
  }

  async _loadServer() {
    await this._store.load();

    const app = this._buildManagementApp({ store: this._store });
    this._server = buildSocketServer({
      store: this._store,
      getAccount: this._getAccount,
      onMessage: this._onMessage,
      authenticate: this._authenticate,
      app: app
    });
  }

  get store() {
    return this._store;
  }

  async listen(...params) {
    await this._loadServer();
    this._server.listen(...params);
  }
}

module.exports = opts => new Socket(opts);
