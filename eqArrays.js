const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1, 2, 3]), true);