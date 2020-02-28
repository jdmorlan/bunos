const express = require("express");
const body = require("body-parser");
const buildHandlers = require("./handlers");

module.exports = opts => {
  const { store } = opts;

  const handlers = buildHandlers({ store });

  const app = express();
  app.use(body.json());

  app.get("/", handlers.all);
  app.post("/publish", handlers.publish);
  app.post("/broadcast", handlers.broadcast);

  return app;
};
