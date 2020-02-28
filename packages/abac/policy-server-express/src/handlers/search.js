module.exports = opts => async (request, response) => {
  const policy = await opts.store.search(request.body);
  response.json({ policy: policy.toJS() });
};
