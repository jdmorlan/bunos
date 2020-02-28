const buildSocketServer = require("@bunos/web-socket");
const buildManagementApp = require("@bunos/ws-management-api");
const memoryStore = require("@bunos/account-store-memory");

const url = require("url");

const server = buildSocketServer({
  buildManagementApp,
  store: memoryStore(),
  getAccount: request => {
    const queryObject = url.parse(request.url, true).query;
    return Promise.resolve(queryObject.accountId);
  }
});

server.listen(8000, () => console.log("Listening"));
