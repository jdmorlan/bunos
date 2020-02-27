const url = require("url");
const isString = require("lodash/isString");
const isUndefined = require("lodash/isUndefined");
const qs = require("query-string");

module.exports = request => {
  let urlStats = url.parse(request.originalUrl);
  let query = qs.parse(urlStats.search);

  const refererUrl = request.headers.referer;
  if (!query.search && request.headers.referer) {
    urlStats = url.parse(refererUrl);
    query = qs.parse(urlStats.search);
  }

  const branch = !isUndefined(query.branch) ? query.branch : null;

  return {
    branch: isString(branch) ? branch.toUpperCase() : branch
  };
};
