const publish = require("./publish");
const broadcast = require("./broadcast");
const all = require("./all");

module.exports = opts => {
  return {
    publish: publish(opts),
    broadcast: broadcast(opts),
    all: all(opts)
  };
};
