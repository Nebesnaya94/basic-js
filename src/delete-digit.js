const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let num = n.toString().split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] > num[i + 1]) {
      num.splice(i + 1, 1);
      break;
    } else if (num[i] < num[i + 1]) {
      num.splice(i, 1);
      break;
    }
  }
  num = num.join("");

  return +num;
}

module.exports = {
  deleteDigit,
};
