/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ret = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && map[s[i]] < map[s[i + 1]]) {
      ret -= map[s[i]];
    } else {
      ret += map[s[i]];
    }
  }

  return ret;
};
