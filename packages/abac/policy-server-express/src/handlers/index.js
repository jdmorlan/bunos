const get = require("./get");
const search = require("./search");
const add = require("./add");
const update = require("./update");
const archive = require("./archive");

module.exports = opts => {
  return {
    get: get(opts),
    search: search(opts),
    add: add(opts),
    update: update(opts),
    archive: archive(opts)
  };
};
