
const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function(data, callback) {
  const resultArray = [];
  for ( let i = 0; i < data.length; i++) {
    const returnValue = callback(data[i]);
    if (returnValue) {
      break;
    }
    resultArray.push(data[i]);
  }
  return resultArray;
};

// Another way:
// const taleUntil = function(data, callback) {
//   const endIndex = array.findIndex(callback);
//   return array.slice(0, endIndex)
// };


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results2, []);

module.exports = takeUntil;