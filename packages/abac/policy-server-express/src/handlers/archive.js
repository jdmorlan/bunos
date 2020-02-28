module.exports = opts => async (request, response) => {
  const { policyId } = request.params;
  await opts.store.archive(policyId);

  response.sendStatus(204);
};
