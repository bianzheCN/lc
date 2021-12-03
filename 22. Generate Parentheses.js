/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ret = [];

  const go = (cur, l, r) => {
    if (l === 0 && r === 0) return ret.push(cur);
    if (l) {
      go(cur + "(", l - 1, r + 1);
    }
    if (r) {
      go(cur + ")", l, r - 1);
    }
  };

  go("", n, 0);

  return ret;
};
