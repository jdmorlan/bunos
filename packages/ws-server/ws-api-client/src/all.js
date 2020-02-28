const fetch = require("isomorphic-fetch");
const { buildHeaders, buildResponse } = require("./utils");

module.exports = opts => async () => {
  const url = `${opts.baseUrl}/`;

  const response = await fetch(url, {
    headers: buildHeaders(opts)
  });

  return await buildResponse(response);
};
