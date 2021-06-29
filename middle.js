
const middle = function(arr) {
  const middleElements = [];
  let i = arr.length / 2;

  if (arr.length > 2) {

    if (arr.length % 2 === 0) {
      middleElements.push(arr[i - 1], arr[i]);
    } else {
      middleElements.push(arr[Math.floor(i)]);
    }
  }
  return middleElements;
};

module.exports = middle;