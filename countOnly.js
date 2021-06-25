const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) { //for each value in the array

    if (itemsToCount[item]) { //if value of the object evaluates to true
      if (results[item]) {
        results[item] += 1; // if an item is already in and counted, add 1 more. (first time returns NaN)
      } else {
        results[item] = 1; // if item hasn't been counted, assign value of 1
      }
    }
  }
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);