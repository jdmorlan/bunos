module.exports = opts => async (request, response, next) => {
  const { store } = opts;
  const { account, payload, attributes } = request.body;

  const ac = await store.get(account.id);
  ac.send(payload, attributes);

  response.json({ msg: "Message Published" });
};
