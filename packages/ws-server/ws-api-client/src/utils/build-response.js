module.exports = async response => {
  if (!response.ok) {
    const json = await response.json();
    return { error: json };
  }

  const json = await response.json();
  return { data: json };
};
