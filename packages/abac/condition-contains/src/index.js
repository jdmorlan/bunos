class ContainsCondition {
  get key() {
    return "CONTAINS";
  }

  run(params, context) {
    const sourceParam = params.find(x => x.key === "source");
    const valueParam = params.find(x => x.key === "value");

    const source = sourceParam.value(context);
    const value = valueParam.value(context);

    return source.includes(value);
  }
}

module.exports = ContainsCondition;
