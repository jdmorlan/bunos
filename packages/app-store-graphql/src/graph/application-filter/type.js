const { gql } = require("apollo-server-express");

module.exports = gql`
  input ApplicationFilter {
    environment: String
  }
`;
