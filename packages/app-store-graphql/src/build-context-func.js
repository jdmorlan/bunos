const isFunction = require("lodash/isFunction");

module.exports = (contextFunc, internalOpts) => async ({ req }) => {
  let externalContext = {};

  if (isFunction(contextFunc)) {
    externalContext = await contextFunc({ req });
  }

  const internalContext = { appStore: internalOpts.appStore };

  return {
    ...externalContext,
    ...internalContext
  };
};
