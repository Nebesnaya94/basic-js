const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arr1 = JSON.parse(JSON.stringify(arr));

  for (let ind = 0; ind < arr1.length; ind++) {
    if (arr1[ind] === "--double-next" && ind < arr1.length - 1) {
      arr1.splice(ind, 1, arr1[ind + 1]);
    } else if (arr1[ind] === "--double-prev" && ind > 0) {
      arr1.splice(ind, 1, arr1[ind - 1]);
    } else if (arr1[ind] === "--discard-next" && ind < arr1.length - 1) {
      arr1.splice(ind, 2);
    } else if (arr1[ind] === "--discard-prev" && ind > 0) {
      arr1.splice(ind - 1, 2);
    } else if (
      (arr1[ind] === "--double-prev" || arr1[ind] === "--discard-prev") &&
      ind === 0
    ) {
      arr1.splice(ind, 1);
    } else if (
      (arr1[ind] === "--double-next" || arr1[ind] === "--discard-next") &&
      ind === arr1.length - 1
    ) {
      arr1.splice(ind, 1);
    }
  }
  return arr1;
}

module.exports = {
  transform,
};
