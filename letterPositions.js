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



const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else if (sentence[i] !== " ") {
        results[sentence[i]] = [i]
    }
  }

  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("Lighthouse in the house"));