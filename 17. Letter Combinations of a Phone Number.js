/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length || !digits[0]) return [];

  const ret = [];
  const n = digits.length;
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (cur, index) => {
    if (index === n) return ret.push(cur);

    if (map[digits[index]]) {
      for (const c of map[digits[index]]) {
        dfs(cur + c, index + 1);
      }
    }
  };

  dfs("", 0);

  return ret;
};
