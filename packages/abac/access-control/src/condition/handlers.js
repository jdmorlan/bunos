const isSame = (value, index, items) => value === items[0];

module.exports = {
  EQUALS: (params, context) => {
    const values = params.map(param => param.value(context));
    return values.every(isSame);
  },
  CONTAINS: (params, context) => {
    const sourceParam = params.find(x => x.key === "source");
    const valueParam = params.find(x => x.key === "value");

    const source = sourceParam.value(context);
    const value = valueParam.value(context);

    return source.includes(value);
  }
};
