/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length
  let left = 0,
    right = 0,
    maxLength = -1,
    sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }
  let count = sum - x
  if (count < 0) {
    return -1
  }
  let sumNums = 0

  while (right < n) {
    sumNums += nums[right]
    while (sumNums > count) {
      sumNums -= nums[left]
      left++
    }
    if (sumNums == count) {
      maxLength = Math.max(maxLength, right - left + 1)
    }
    right++
  }

  if (maxLength === -1) return -1
  return n - maxLength
}
