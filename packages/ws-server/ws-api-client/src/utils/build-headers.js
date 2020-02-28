module.exports = opts => {
  return {
    "Content-Type": "application/json",
    Authorization: opts.authToken
  };
};
