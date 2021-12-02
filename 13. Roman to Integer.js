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
    const cur = s[i]
    const next = s[i + 1]
    if (s[i + 1] && map[cur] < map[next]) {
      ret -= map[cur];
    } else {
      ret += map[cur];
    }
  }

  return ret;
};
