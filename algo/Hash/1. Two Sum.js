/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    const pair = map.get(target - x)
    if (pair !== undefined) return [pair, i]
    map.set(x, i)
  }
}
