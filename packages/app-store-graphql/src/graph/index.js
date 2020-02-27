const customScalars = require("./custom-scalars");
const application = require("./application");
const applicationFilter = require("./application-filter");
const applicationTarget = require("./application-target");
const query = require("./query");
const mutation = require("./mutation");

const items = [
  customScalars,
  application,
  applicationFilter,
  applicationTarget,
  query,
  mutation
];

module.exports = {
  typeDefs: items.map(x => x.type),
  resolvers: items.map(x => x.resolvers)
};
