const { Map } = require("immutable");
const { Account } = require("@bunos/account");

class MemoryAccountStore {
  constructor() {
    this._accounts = Map();
  }

  async load() {
    return Promise.resolve();
  }

  all() {
    return this._accounts.valueSeq().map(account => new Account(account));
  }

  async set(accountId, ws) {
    this._accounts = this._accounts.set(accountId, { id: accountId, ws });
    return Promise.resolve();
  }

  async get(accountId) {
    const account = this._accounts.get(accountId);
    return Promise.resolve(new Account(account));
  }

  async delete(accountId) {
    this._accounts = this._accounts.delete(accountId);
    return Promise.resolve();
  }
}

module.exports = () => new MemoryAccountStore();
