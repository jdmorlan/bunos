const uuid = require("uuid");

module.exports = [
  {
    id: uuid.v4(),
    name: "eog",
    environment: "stage",
    target: {
      type: "SERVER",
      url: "http://localhost:4001",
      attributes: {}
    }
  }
];
