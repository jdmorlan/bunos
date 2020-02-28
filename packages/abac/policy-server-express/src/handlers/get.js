module.exports = opts => async (request, response) => {
  const { policyId } = request.params;
  const policy = await opts.store.get(policyId);

  if (!policy) {
    return response.sendStatus(404);
  }

  response.json({ policy: policy.toJS() });
};
