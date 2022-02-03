/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const sum = [0]
  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]
  }

  let ans = Number.MIN_SAFE_INTEGER,
    pre = 0
  for (let i = 1; i < sum.length; i++) {
    const cur = sum[i] - pre
    ans = Math.max(ans, cur)
    pre = pre < sum[i] ? pre : sum[i]
  }

  return ans
}
