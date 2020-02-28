const { ApolloServer, gql } = require("apollo-server-express");
const omit = require("lodash/omit");

const graphItems = require("./graph");
const buildContext = require("./build-context-func");

module.exports = opts => {
  const serverOpts = opts.server || {};
  const context = buildContext(serverOpts.context, opts);

  const { typeDefs, resolvers } = graphItems;
  const otherServerOptions = omit(serverOpts, ["context"]);

  return new ApolloServer({
    typeDefs,
    resolvers,
    context,
    ...otherServerOptions
  });
};
