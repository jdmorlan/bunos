module.exports = opts => async (request, response, next) => {
  const { store } = opts;
  const accounts = await store.all();
  response.json(accounts.map(x => x.toJS()));
};
