const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) { 
    for (const val in obj1) { 
      return obj1[val] === obj2[val];
    }
  }
  return false;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  let answer = `❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;

  if (eqObjects(obj1, obj2)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`;
  }
  console.log(answer);
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'}, true);