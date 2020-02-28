const connect = require("./connect");
const publish = require("./publish");
const broadcast = require("./broadcast");
const allClients = require("./all");

module.exports = opts => {
  return {
    connect: connect(opts),
    publish: publish(opts),
    broadcast: broadcast(opts),
    allClients: allClients(opts)
  };
};
