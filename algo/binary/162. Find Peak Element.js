/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length
  let l = 0,
    r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= nums[mid + 1]) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return r
}
