const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};

const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length === Object.keys(obj2).length) { // 1. does object1 and object2 have the same number of properties?
    for (const val in obj1) { // 2. scan properties in one object1;
      return obj1[val] === obj2[val]; // 3. check if the value in object1 equals to the value for that same property in object2; order doesn't matter here 
    }
  }
  return false;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
eqObjects(ab, ba); // true
assertEqual(eqObjects(ab, ba), true); // assertion passed

const abc = { a: "1", b: "2", c: "3"};
eqObjects(ab, abc); // false
assertEqual(eqObjects(ab, abc), false); // assertion passed