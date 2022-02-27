/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0,
    r = num
  while (l < r) {
    const mid = (l + r) >> 1
    if (mid * mid >= num) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return r * r === num
}
