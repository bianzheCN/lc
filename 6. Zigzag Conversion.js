/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arr = [];

  // init arr items as empty string
  for (let i = 0; i < numRows; i++) {
    arr[i] = "";
  }

  let isConverted = false,
    count = 0;
  for (const c of s) {
    // concat char to arr items str
    arr[count] += c;
    isConverted ? count-- : count++;
    if (count === numRows - 1 || count === 0) isConverted = !isConverted;
  }

  return arr.reduce((acc, cur) => acc + cur, "");
};
