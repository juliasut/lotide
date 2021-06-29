const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual([1, 3, 5], [1, 3, 5]);
assertArraysEqual(["Ok", 3, 5], [1, 3, 5]);
assertArraysEqual([1, 5], [1, 3, 5]);
assertArraysEqual([], []);
assertArraysEqual([], [undefined]);
assertArraysEqual([{a: 1}], [{a: 1}]); // cannot process objects in the array