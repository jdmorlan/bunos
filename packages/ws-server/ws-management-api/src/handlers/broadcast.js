module.exports = opts => async (request, response, next) => {
  const { store } = opts;
  const { payload, attributes } = request.body;

  const accounts = await store.all();

  accounts.forEach(account => {
    account.send(payload, attributes);
  });

  response.json({
    accounts: accounts.length
  });
};
