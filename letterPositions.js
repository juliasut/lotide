const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {          //if already added to the array of occurences, add next one too
      results[sentence[i]].push(i)
    } else if (sentence[i] !== " ") {   //if not a white space, add to the array
        results[sentence[i]] = [i]
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("Lighthouse in the house"));

module.exports = letterPositions;