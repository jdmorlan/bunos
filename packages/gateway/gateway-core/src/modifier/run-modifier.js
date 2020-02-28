const merge = require("lodash/merge");

const defaultOptions = {
  middlewares: []
};

module.exports = async (request, opts) => {
  const normOpts = { ...defaultOptions, ...opts };
  const { middlewares } = normOpts;

  let result = {};

  for (const middleware of middlewares) {
    const middlewareResult = await middleware(request, result);
    merge(result, middlewareResult);
  }

  return result;
};
