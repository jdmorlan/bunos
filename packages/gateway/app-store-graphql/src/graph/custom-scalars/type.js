const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar JSON
  scalar URL
  scalar GUID
`;
