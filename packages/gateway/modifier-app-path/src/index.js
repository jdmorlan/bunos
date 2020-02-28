const url = require("url");

module.exports = request => {
  const [_, applicationName, ...rest] = request.originalUrl.split("/");

  return {
    application: applicationName,
    path: rest.join("/")
  };
};
