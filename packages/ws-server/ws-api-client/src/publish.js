const fetch = require("ismorphic-fetch");
const { buildHeaders, buildResponse } = require("./utils");

module.exports = opts => async params => {
  const url = `${opts.baseUrl}/publish`;

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(opts),
    body: JSON.stringify(params)
  });

  return await buildResponse(response);
};
