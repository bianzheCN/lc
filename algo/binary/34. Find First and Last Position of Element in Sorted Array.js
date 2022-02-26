/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const l = binarySearch(nums, target, true)
  const r = binarySearch(nums, target, false) - 1

  if (nums[l] !== target && nums[r] !== target) return [-1, -1]

  return [l, r]
}

function binarySearch(arr, target, lower) {
  let l = 0,
    r = arr.length - 1,
    ans = arr.length
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (arr[mid] > target || (lower && arr[mid] >= target)) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}

// 三叶
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ret = [-1, -1],
    n = nums.length
  if (n === 0) return ret

  let l = 0,
    r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  if (nums[r] !== target) {
    return ret
  } else {
    ret[0] = r
    ;(l = 0), (r = n - 1)
    while (l < r) {
      const mid = (l + r + 1) >> 1
      if (nums[mid] <= target) {
        l = mid
      } else {
        r = mid - 1
      }
    }

    ret[1] = l
  }

  return ret
}
