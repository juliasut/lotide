const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};

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

assertEqual(countLetters("Light in"), {l: 1, i: 2, g: 1, h: 1, t: 1, n: 1});