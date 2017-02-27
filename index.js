var styleMap = require('./map.json')

var convert = function (key) {
  return styleMap[key.toLowerCase()] ? styleMap[key.toLowerCase()] : key
}

module.exports = convert
module.exports.convert = convert
