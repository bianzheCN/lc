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

// Binary Search
var longestCommonPrefix = function (strs) {
  let minLen = Number.MAX_SAFE_INTEGER;

  for (const str of strs) {
    minLen = Math.min(minLen, str.length);
  }

  let low = 0;
  let high = minLen - 1;

  while (low <= high) {
    let middle = (low + high) >>> 1;

    if (isCommonPrefix(middle)) low = middle + 1;
    else {
      high = middle - 1;
    }
  }

  function isCommonPrefix(len) {
    const str1 = strs[0].slice(0, len + 1);

    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1)) return false;
    }

    return true;
  }

  return strs[0].slice(0, low);
};
