const WebSocket = require("isomorphic-ws");

module.exports = opts => params => {
  const ws = new WebSocket(`ws://${opts.baseUrl}`, {
    headers: {
      Authorization: opts.authToken
    }
  });

  ws.on("open", function() {
    ws.on("message", async message => {
      const raw = Buffer.from(message).toString("utf8");
      const json = JSON.parse(raw);
      await params.onMessage(json, ws);
    });
  });
};
