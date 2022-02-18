/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length
  let l = 0,
    r = 0

  while (r < n) {
    while (nums[r]) {
      ;[nums[r], nums[l]] = [nums[l], nums[r]]
      l++
      r++
    }

    r++
  }

  return nums
}
