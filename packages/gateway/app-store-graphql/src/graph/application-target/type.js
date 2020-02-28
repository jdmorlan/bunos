const { gql } = require("apollo-server-express");

module.exports = gql`
  type ApplicationTarget {
    type: String
    url: URL
    attributes: JSON
  }
`;
