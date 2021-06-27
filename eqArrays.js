const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};

const eqArrays = function(arr1, arr2) {
   if (arr1.length !== arr2.length) {
     return false;
   }
   return arr1.every((val, index) => val === arr2[index]);
};

//checking the length of the arrays in case last elements of one left unevaluated
// .every() method goes though each element of an array;
// passes a callback function;
// and passes each element to that function;
// checks something and returns true or false;
// only if each(!) element returns true, .each() method returns a true;



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1, 2, 3]), true);
