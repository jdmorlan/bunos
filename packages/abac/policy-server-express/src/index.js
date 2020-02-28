const express = require("express");
const body = require("body-parser");
const buildHandlers = require("./handlers");

module.exports = opts => {
  const app = opts.app || express();
  app.use(body.json());

  const handlers = buildHandlers({ store: opts.store });

  app.get("/:policyId", handlers.get);
  app.post("/", handlers.add);
  app.post("/search", handlers.search);
  app.patch("/:policyId", handlers.update);
  app.delete("/:policyId", handlers.archive);

  return app;
};
