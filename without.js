const assertArraysEqual = require('./assertArraysEqual')

const without = function(source, itemsToRemove) {
  let arrayWithout = [];

  for (let i = 0; i < source.length; i++) {
    if (! itemsToRemove.includes(source[i])) {
      arrayWithout.push(source[i]);
    }
  }
  return arrayWithout;
};

// const without = function(source, itemsToRemove) {
//   let arrayWithout = [...source]; //make a copy of the original array to modify
//   for (let i = 0; i < arrayWithout.length; i++) {
//     for (let itemToRemove of itemsToRemove) {
//       if (arrayWithout[i] === itemToRemove) {
//         arrayWithout.splice(i, 1);
//       }
//     }
//   }
//   return arrayWithout;
// }

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["k", "2", 3], ["k", 2, 3]), ["2"]);
assertArraysEqual(without(["k", "2", 3], ["k", 2, 3]), [2]);
assertArraysEqual(without(["k", "2", 3], ["k", 2, 3]), []);

const words = ["hello", "world", 4, "lighthouse", 5];
without(words, ["lighthouse"]);

module.exports = without;
