const Gateway = require("./gateway");
const omit = require("lodash/omit");

const Modifier = require("./modifier");
const Responder = require("./responder");

module.exports = opts => {
  const modifier = opts.modifier || new Modifier();
  const responder = opts.responder || new Responder();
  const otherOpts = omit(opts, ["modifier", "responder"]);

  return new Gateway({
    modifier: modifier,
    responder: responder,
    ...otherOpts
  });
};
