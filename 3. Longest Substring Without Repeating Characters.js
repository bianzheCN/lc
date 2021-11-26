/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const win = new Set();
  let i = 0;
  let j = 0;
  let max = 0;

  while (j < s.length) {
    if (!win.has(s[j])) {
      win.add(s[j]);
      j++;
    } else {
      win.delete(s[i]);
      i++;
    }

    max = Math.max(max, win.size);
  }

  return max;
};
