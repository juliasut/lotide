const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
  }
};

const tail = function(arr) {
  const [first, ...other] = arr;
  return other;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
