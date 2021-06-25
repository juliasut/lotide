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

const middle = function(arr) {
  const middleElements = [];
  let i = 0;

  if (arr.length < 3) {
    return middleElements;
  }
  if (arr.length % 2 !== 0) {
    i = (arr.length - 1) / 2;
    middleElements.push(arr[i]);
  }

  if (arr.length % 2 === 0) {
    i = (arr.length / 2);
    middleElements.push(arr[i - 1], arr[i]);
  }
  return middleElements;
};

assertArrayEqual(middle([1]), []); // => []
assertArrayEqual(middle([1, 2]), []); // => []

assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);