/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return countResult(nums, 0, nums.length - 1)
}

function countResult(nums, l, r) {
  // if the section length <= 1, reverse pairs number is 0
  if (l >= r) return 0
  let ans = 0
  const mid = (l + r) >> 1,
    temp = []

  // pairs in the left section
  ans += countResult(nums, l, mid)
  // pairs in the right section
  ans += countResult(nums, mid + 1, r)

  // pairs across the left & right
  let k = 0,
    p1 = l,
    p2 = mid + 1

  while (p1 <= mid && p2 <= r) {
    if (nums[p1] > 2 * nums[p2]) {
      ans += mid - p1 + 1
      p2++
    } else {
      p1++
    }
  }

  p1 = l
  p2 = mid + 1
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && nums[p1] < nums[p2])) {
      temp[k++] = nums[p1++]
    } else {
      temp[k++] = nums[p2++]
    }
  }

  for (let i = l; i <= r; i++) {
    nums[i] = temp[i - l]
  }
  return ans
}
