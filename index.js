var styleMap = require('./map.json')

var convert = function (key) {
  var val = styleMap[key.toLowerCase()];
  return val ? val : key;
};

module.exports = convert;
module.exports.convert = convert;
