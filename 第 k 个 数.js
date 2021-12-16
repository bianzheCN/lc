/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const dp = [1]
  let p3 = 0
  let p5 = 0
  let p7 = 0

  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7)

    if (!(dp[i] % 3)) p3++
    if (!(dp[i] % 5)) p5++
    if (!(dp[i] % 7)) p7++
  }

  return dp[k - 1]
}

getKthMagicNumber(9)
