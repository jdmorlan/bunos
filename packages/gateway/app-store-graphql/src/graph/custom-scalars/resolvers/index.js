const { JSONResolver, URLResolver, GUIDResolver } = require("graphql-scalars");

module.exports = {
  JSON: JSONResolver,
  URL: URLResolver,
  GUID: GUIDResolver
};
