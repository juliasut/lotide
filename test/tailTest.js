const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns all elements exept for the first one", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("returns the length of the array without the first element", () => {
    assert.deepEqual(tail(words).length, 2);
  });

});
