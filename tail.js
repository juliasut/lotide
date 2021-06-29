const assertEqual = requires('./assertEqual')

const tail = function(arr) {
  const [first, ...other] = arr;
  return other;
};

//const tail = arr => return arr.slice(1); - return an arr copy starting at position 1

module.exports = tail;
