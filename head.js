const assertEqual = require('./assertEqual');

const head = function(arr) {
  const [first, ...other] = arr;  // other version: const head = arr => arr[0]
  return first;
};

module.exports = head;