/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, t) {
  const n = nums.length
  let l = 0,
    r = n - 1
  // 恢复二段性
  while (l < r && nums[0] == nums[r]) r--

  // 第一次二分，找旋转点
  while (l < r) {
    const mid = (l + r + 1) >> 1
    if (nums[mid] >= nums[0]) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  let idx = n
  if (nums[r] >= nums[0] && r + 1 < n) idx = r + 1

  // 第二次二分，找目标值
  let ans = find(nums, 0, idx - 1, t)
  if (ans !== -1) return true
  ans = find(nums, idx, n - 1, t)

  return ans !== -1
}

function find(nums, l, r, t) {
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= t) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return nums[r] == t ? r : -1
}
