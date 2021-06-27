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
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEqual(results1, [1, 2, 5, 7, 2]);
assertArrayEqual(results2, [1, 2, 5, 7, 2]);
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArrayEqual(results2, []);