module.exports = opts => async (request, response) => {
  const { policyId } = request.params;

  const policy = await opts.store.update({ ...request.body, policyId });
  response.json({ policy: policy.toJS() });
};
