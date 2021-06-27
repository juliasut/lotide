const eqArrays = function(arr1, arr2) {
  return arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArrayEqual([1, 3, 5], [1, 3, 5]);
assertArrayEqual(["Ok", 3, 5], [1, 3, 5]);
assertArrayEqual([1, 5], [1, 3, 5]);
assertArrayEqual([], []);
assertArrayEqual([], [undefined]);
assertArrayEqual([{a: 1}], [{a: 1}]); // cannot process objects in the array
