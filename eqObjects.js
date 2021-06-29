const assertEqual = require('./assertEqual')


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

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
eqObjects(ab, ba); // true
assertEqual(eqObjects(ab, ba), true); // assertion passed

const abc = { a: "1", b: "2", c: "3"};
eqObjects(ab, abc); // false
assertEqual(eqObjects(ab, abc), false); // assertion passed

const ac = { a: "1", c: "m"};
eqObjects(ab, ac); // false
assertEqual(eqObjects(ab, ac), false) // assertion passed

module.exports = eqObjects;
