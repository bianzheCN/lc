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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(log(n))
var search = function (nums, target) {
  const n = nums.length
  if (n == 0) return -1
  if (n == 1) return nums[0] == target ? 0 : -1

  let l = 0,
    r = n - 1
  while (l < r) {
    const mid = (l + r + 1) >> 1
    if (nums[mid] >= nums[0]) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  if (target >= nums[0]) {
    l = 0
  } else {
    l = l + 1
    r = n - 1
  }

  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return nums[r] === target ? r : -1
}
