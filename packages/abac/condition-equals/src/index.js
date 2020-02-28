const isSame = (value, index, items) => value === items[0];

class EqualsCondition {
  get key() {
    return "EQUALS";
  }

  run(params, context) {
    const values = params.map(param => param.value(context));
    return values.every(isSame);
  }
}

module.exports = EqualsCondition;
