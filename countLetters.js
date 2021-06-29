const assertEqual = require('./assertEqual')

const countLetters = function(string) {
  let result = {};
  for (const letter of string.toLowerCase()) {
    if (result[letter]) {
      result[letter] += 1;
    } else if (letter !== " ") {
      result[letter] = 1;
    }
  }
  return result;
};

assertEqual(countLetters("Light in"), { l: 4, i: 2, g: 1, h: 1, t: 1, n: 1 });
assertEqual(countLetters("Light in"), { l: 1, i: 2, g: 1, h: 1, t: 1, n: 1 });
assertEqual(countLetters("1Hello"), { e: 1, l: 2, o: 1 });
assertEqual(countLetters("A D a"), { a: 2, d: 1 });

module.exports = countLetters;