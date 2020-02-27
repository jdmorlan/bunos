const { gql } = require("apollo-server-express");

module.exports = gql`
  input ApplicationTargetInput {
    type: String!
    url: URL!
    attributes: JSON
  }

  input AddApplicationInput {
    id: GUID!
    name: String!
    environment: String!
    target: ApplicationTargetInput!
  }

  type Mutation {
    addApplication(application: AddApplicationInput!): Application
  }
`;
