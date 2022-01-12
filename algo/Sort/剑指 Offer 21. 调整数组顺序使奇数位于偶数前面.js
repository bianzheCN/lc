/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (!nums.length) return []
  const res = []
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    while (left < right && nums[left] % 2 !== 0) {
      left++
    }

    while (left < right && nums[right] % 2 === 0) {
      right--
    }

    ;[nums[left], nums[right]] = [nums[right], nums[left]]
  }

  return nums
}
