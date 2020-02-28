module.exports = opts => async (request, response) => {
  const policy = await opts.store.add(request.body);
  response.status(201).json({ policy: policy.toJS() });
};
