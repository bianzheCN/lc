/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let isNeg = false,
    x = dividend,
    y = divisor
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) isNeg = true
  if (x < 0) x = -x
  if (y < 0) y = -y

  let l = 0,
    r = x
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2)
    if (mul(mid, y) <= x) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  l = isNeg ? -l : l
  const MIN = Math.pow(-2, 31)
  const MAX = Math.pow(2, 31) - 1
  if (l < MIN) {
    return MIN
  } else if (l > MAX) {
    return MAX
  }
  return l
}

function mul(a, k) {
  let ans = 0
  while (k > 0) {
    if (k & 1) ans += a
    k >>>= 1
    a += a
  }

  return ans
}
