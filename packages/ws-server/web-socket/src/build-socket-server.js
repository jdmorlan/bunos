const http = require("http");
const WebSocket = require("ws");

module.exports = opts => {
  const { app, getAccount, authenticate, store, onMessage } = opts;

  const server = http.createServer(app);
  const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

  server.on("upgrade", async function(request, socket, head) {
    const authenticated = await authenticate(request);

    if (!authenticated) {
      socket.destroy();
      return;
    }

    wss.handleUpgrade(request, socket, head, function(ws) {
      wss.emit("connection", ws, request);
    });
  });

  wss.on("connection", async function(ws, request) {
    const accountId = await getAccount(request);
    store.set(accountId, ws);

    ws.on("message", async function(message) {
      const account = await store.get(accountId);
      await onMessage({ message, account });
    });

    ws.on("close", async function() {
      await store.delete(accountId);
    });
  });

  return server;
};
