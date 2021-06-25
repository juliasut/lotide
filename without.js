const eqArrays = function(arr1, arr2) {
  return arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);
};
const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let arrayWithout = [];

  for (let i = 0; i < source.length; i++) {
    if (! itemsToRemove.includes(source[i])) {
      arrayWithout.push(source[i]);
    }
  }
  return arrayWithout;
};

assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
assertArrayEqual(without(["k", "2", 3], ["k", 2, 3]), ["2"]);
assertArrayEqual(without(["k", "2", 3], ["k", 2, 3]), [2]);
assertArrayEqual(without(["k", "2", 3], ["k", 2, 3]), []);

const words = ["hello", "world", 4, "lighthouse", 5];
without(words, ["lighthouse"]);
