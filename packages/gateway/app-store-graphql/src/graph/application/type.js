const { gql } = require("apollo-server-express");

module.exports = gql`
  type Application {
    id: GUID
    name: String
    environment: String
    target: ApplicationTarget
  }
`;
