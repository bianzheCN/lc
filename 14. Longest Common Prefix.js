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

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // divide and conquer
  function lcp(l, r) {
    if (l === r) return strs[l];

    let mid = (l + r) >>> 1;
    let lcpLeft = lcp(l, mid);
    let lcpRight = lcp(mid + 1, r);

    return commonPrefix(lcpLeft, lcpRight);
  }

  function commonPrefix(left, right) {
    let min = Math.min(left.length, right.length);

    for (let i = 0; i < min; i++) {
      if (left[i] !== right[i]) return left.slice(0, i);
    }

    return left.slice(0, min);
  }

  return lcp(0, strs.length - 1);
};
