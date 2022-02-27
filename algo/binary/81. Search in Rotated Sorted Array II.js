/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const n = nums.length
  let l = 0,
    r = n - 1
  while (l < r && nums[0] == nums[r]) r--
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2)
    if (nums[mid] >= nums[0]) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  let idx = n
  if (nums[l] >= nums[0] && l + 1 < n) idx = l + 1
  let ans = find(nums, 0, idx - 1, target)
  if (ans !== -1) return true
  ans = find(nums, idx, n - 1, target)
  return ans === -1 ? false : true
}

function find(arr, l, r, target) {
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (arr[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return arr[r] === target ? r : -1
}
