const { JSONPath } = require("jsonpath-plus");
const first = require("lodash/first");

const handlers = {
  CONSTANT: (param, context) => param.value,
  JSONPATH: (param, context) => {
    const value = JSONPath({ path: param.value, json: context });
    return first(value);
  }
};

module.exports = handlers;
