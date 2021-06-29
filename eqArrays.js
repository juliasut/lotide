const assertEqual = require('./assertEqual')

const eqArrays = function(arr1, arr2) {
   if (arr1.length !== arr2.length) {
     return false;
   }
   return arr1.every((val, index) => val === arr2[index]);
};

//checking the length of the arrays in case last elements of one left unevaluated
// .every() method goes though each element of an array;
// passes a callback function;
// and passes each element to that function;
// checks something and returns true or false;
// only if each(!) element returns true, .each() method returns a true;

module.exports = eqArrays;

