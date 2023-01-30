const settings = {
  windowWidth: 300,
  windowHeight: 400
};

function get(key) {
  return settings[key];
};

module.exports = {
  get: get,
};