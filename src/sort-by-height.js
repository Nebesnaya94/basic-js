const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  let num = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === -1) {
      num.push(i);
    }
  }

  arr = arr
    .filter((n) => {
      return n !== -1;
    })
    .sort((a, b) => a - b);

  for (let i = 0; i < arrLength; i++) {
    if (num.includes(i)) {
      newArr.push(-1);
    } else {
      newArr.push(arr[0]);
      arr.shift();
    }
  }

  return newArr;
}

module.exports = {
  sortByHeight,
};
