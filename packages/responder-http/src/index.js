const { proxy } = require("fast-proxy")({});

class HTTPResponder {
  get key() {
    return "SERVER";
  }

  getProxyUrl(opts) {
    const { target, modification = {} } = opts;

    if (modification.path) {
      return `${target.url}/${modification.path}`;
    }

    return target.url;
  }

  run(opts) {
    const { request, response } = opts;

    try {
      const proxyUrl = this.getProxyUrl(opts);
      proxy(request, response, proxyUrl, {});
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = HTTPResponder;
