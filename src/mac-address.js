const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  for (let dash = 2; dash <= n.length - 3; dash += 3) {
    if (n[dash] !== "-") {
      return false;
    }
  }

  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "-",
  ];

  for (let i = 0; i < n.length; i++) {
    if (!arr.includes(n[i])) {
      return false;
    }
  }

  return true;
}
module.exports = {
  isMAC48Address,
};
