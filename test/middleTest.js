const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array if array has one element", () => {
    assert.deepEqual(middle([3]), []);
  });

  it("returns empty array if array has less that three elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns a single middle element if array has odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns two middle elements if array has even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});






// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);