
const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("45", "45");
assertEqual(1, 1);
assertEqual(3, 10);