/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const sum = [0]
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = nums[i] + sum[i]
  }

  return mergeSort(sum, 0, sum.length - 1, lower, upper)
}

function mergeSort(sum, l, r, lower, upper) {
  if (l >= r) return 0
  const mid = (l + r) >> 1,
    temp = []
  let p1 = l,
    p2 = mid + 1,
    ans = 0,
    k = 0

  ans += mergeSort(sum, p1, mid, lower, upper)
  ans += mergeSort(sum, p2, r, lower, upper)
  ans += countTwoParts(sum, p1, mid, p2, r, lower, upper)

  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && sum[p1] <= sum[p2])) {
      temp[k++] = sum[p1++]
    } else {
      temp[k++] = sum[p2++]
    }
  }
  for (let i = l; i <= r; i++) {
    sum[i] = temp[i - l]
  }

  return ans
}

function countTwoParts(sum, l1, r1, l2, r2, lower, upper) {
  let ans = 0,
    k1 = l1,
    k2 = l1

  // 找一个 sum[j]
  for (let j = l2; j <= r2; j++) {
    let a = sum[j] - upper
    let b = sum[j] - lower

    // 求第一个位置 >= a，第一个位置 > b
    while (k1 <= r1 && sum[k1] < a) k1++
    // 此时 k1 指向的是第一个 >= a 的位置

    while (k2 <= r1 && sum[k2] <= b) k2++
    // 此时 k2 指向的是第一个 > b 的位置

    ans += k2 - k1
  }

  return ans
}
