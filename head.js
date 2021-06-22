const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
    console.log(expected);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    console.log(expected);
  }
};

const head = function(arr) {
  const [first, ...other] = arr;
  return first;
};



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Other");
assertEqual(head([]), "1");
assertEqual(head(["one"]), "one");