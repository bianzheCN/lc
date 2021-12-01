/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ret = "";

  for (let i = 0; i < strs[0].length; i++) {
    const cur = strs[0][i];
    let flag = true;

    for (let j = 1; j < strs.length; j++) {
      if (cur !== strs[j][i]) {
        flag = false;
        break;
      }
    }

    if (flag) ret += cur;
    if (!flag) return ret;
  }

  return ret;
};
