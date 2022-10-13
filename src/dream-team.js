const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members)) {
    let selectMembers = members.filter((member) => typeof member === "string");
    selectMembers = selectMembers.map((member) =>
      member.toUpperCase().trim().substring(0, 1)
    );
    selectMembers.sort();
    let team = selectMembers.join("");
    return team;
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
