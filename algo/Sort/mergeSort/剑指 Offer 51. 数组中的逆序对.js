/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return countResults(nums, 0, nums.length - 1)
}

function countResults(nums, l, r) {
  if (l >= r) return 0

  const temp = [],
    mid = (l + r) >> 1
  let ans = 0,
    p1 = l,
    p2 = mid + 1,
    k = 0

  ans += countResults(nums, l, mid)
  ans += countResults(nums, mid + 1, r)

  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && nums[p1] <= nums[p2])) {
      temp[k++] = nums[p1++]
    } else {
      temp[k++] = nums[p2++]
      ans += mid - p1 + 1
    }
  }

  for (let i = l; i <= r; i++) {
    nums[i] = temp[i - l]
  }

  return ans
}
