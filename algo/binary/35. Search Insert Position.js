/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    ans = nums.length
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= target) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}
