const Gateway = require("./gateway");
const omit = require("lodash/omit");
const isArray = require("lodash/isArray");
const isEmpty = require("lodash/isEmpty");

const Modifier = require("./modifier");
const Responder = require("./responder");

module.exports = opts => {
  const modifier = new Modifier();
  const responder = new Responder();
  const otherOpts = omit(opts, [
    "modifier",
    "responder",
    "modifiers",
    "responders"
  ]);

  if (isArray(opts.modifiers) && !isEmpty(opts.modifiers)) {
    opts.modifiers.forEach(mod => {
      modifier.use(mod);
    });
  }

  if (isArray(opts.responders) && !isEmpty(opts.responders)) {
    opts.responders.forEach(res => {
      responder.register(res);
    });
  }

  return new Gateway({
    modifier: modifier,
    responder: responder,
    ...otherOpts
  });
};
