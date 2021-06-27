const assertEqual = function(actual, expected) {
  let answer = `❌ Assertion Failed: ${actual} !== ${expected}`;
  if (String(actual) === String(expected)) {
    answer = `✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(answer);
};

const findKeyByValue = function(obj, value) {
  for (let parameter in obj) {   // scan the object -> use for..in loop for objects (iterates in arbitrary order)
    if (obj[parameter].includes(value)) {    // key is a parameter; obj[key] is the value of that parameter;
      return parameter;   // return the first key which contains the given value
    }
  }
};

/*const findkeyByValue = function(shows, movieName) {
  for (let genre in shows) {
    if (shows[genre] === movieName) {
      return genre;
    }
  }
}*/


/*const findKeyByValue = function(shows, movieName) {
  const genreArray = Object.keys(shows);
  for (let genre in genreArray) {       // returns a flat array of object properties (keys)
    if (shows[genre] === movieName) {
      return genre;
    }
  }
}




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire");
//findKeyByValue(bestTVShowsByGenre, "The Expanse");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 45);
