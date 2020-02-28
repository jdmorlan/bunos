const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    getApplications(filter: ApplicationFilter): [Application]
    getApplication(id: String): Application
  }
`;
