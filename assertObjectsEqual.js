const eqObjects = function(obj1, obj2) {
  const obj1KeysArray = Object.keys(obj1);
  const obj2KeysArray = Object.keys(obj2);

  if (obj1KeysArray.length !== obj2KeysArray.length) {
    return false;
    }

    for (const key1 in obj1) { 
      if (obj1[key1] !== obj2[key1]) {
        return false;
      } 
    }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
}

assertObjectsEqual({a: 'one', b: 2}, {b: 2, a: 'one'}); //passed
assertObjectsEqual({a: '5', b: 2}, {b: 2, a: '1'}); //failed
assertObjectsEqual({a: '1', b: "string"}, {b: 2, a: '1'}); //failed