const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
  }
};

const tail = function(arr) {
  const [...other] = arr;
  return other;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
