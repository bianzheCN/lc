/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(n)
var search = function (nums, target) {
  const n = nums.length
  let ans,
    index = n - 1
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) index = i
  }

  ans = find(nums, 0, index, target)
  if (ans !== -1) return ans
  ans = find(nums, index + 1, n - 1, target)

  return ans
}

function find(arr, l, r, target) {
  while (l < r) {
    const mid = (l + r) >> 1
    const cur = arr[mid]
    if (cur >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return arr[r] === target ? r : -1
}
