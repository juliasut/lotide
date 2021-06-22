const assertEqual = function(actual, expected) {
  if (String(actual) !== String(expected)) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅  Assertion Passed: [actual] === [expected]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("45", "45");
assertEqual(1, 1);
assertEqual(3, 10);