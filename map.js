
const assertArraysEqual = require('./assertArraysEqual')

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {  //map() creates new array with the results of callback function on every element
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [1, 3, 5]);
assertArraysEqual(results1, []);
assertArraysEqual(results1, [""]);

module.exports = words;