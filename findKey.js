const assertEqual = function(actual, expected) {
  if (String(actual) !== String(expected)) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(planetSystem, callback) {
  for (const starName in planetSystem) {
    if(callback(planetSystem[starName])) {
      return starName;   //returns the first truthy value
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "Akaleri"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "Ora");

// assertEqual(findKey({
// }, x => x.stars === 2), undefined);