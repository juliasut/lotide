const eqObjects = require('./eqObjects')

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

module.exports = assertObjectsEqual;