/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  if (a > b) return maximumScore(b, a, c)
  if (b > c) return maximumScore(a, c, b)
  if (a > b) return maximumScore(b, a, c)

  let ans = 0

  // step1
  const cnt1 = Math.min(c - b, a)

  c -= cnt1
  a -= cnt1
  ans += cnt1

  // step2
  if (a !== 0) {
    a = a % 2 === 0 ? a : a - 1

    c -= a / 2
    b -= a / 2
    ans += a
  }

  // step3
  ans += b

  return ans
}
