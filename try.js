const settings = {
  windowDims: {
    width: 300,
    height: 400,
  }
};

function get(schema, key) {
  return settings[schema][key];
};

module.exports = {
  get: get,
};