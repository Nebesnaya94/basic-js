const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrS2 = s2.split("").sort();

  for (let ind = 0; ind < s1.length; ind++) {
    if (arrS2.includes(s1[ind])) {
      let n = arrS2.indexOf(s1[ind]);
      arrS2.splice(n, 1);
    }
  }

  return s2.length - arrS2.length;
}

module.exports = {
  getCommonCharacterCount,
};
