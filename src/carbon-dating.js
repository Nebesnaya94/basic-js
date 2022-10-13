const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity == "string") {
    if (+sampleActivity > 0) {
      // let k = MODERN_ACTIVITY / +sampleActivity / HALF_LIFE_PERIOD;
      // let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
      let t =
        (Math.log(MODERN_ACTIVITY / +sampleActivity) / Math.log(2)) *
        HALF_LIFE_PERIOD;
      if (t >= 0) {
        return Math.ceil(t);
      }
    }
  }
  return false;
}

module.exports = {
  dateSample,
};
