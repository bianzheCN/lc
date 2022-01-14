/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)

  return nums
}

function quickSort(nums, l, r) {
  partition(nums, l, r)
  insertSort(nums, l, r)
}

function partition(nums, l, r) {
  while (r - l > 16) {
    let x = l,
      y = r,
      base = getMid(nums[l], nums[r], nums[Math.floor((l + r) / 2)])

    do {
      while (x < y && nums[x] < base) x++
      while (x < y && nums[y] > base) y--

      if (x < y) {
        ;[nums[x], nums[y]] = [nums[y], nums[x]]
        x++
        y--
      }
    } while (x < y)

    partition(nums, x + 1, r)
    r = x
  }
}

function insertSort(nums, l, r) {
  let ind = l

  for (let i = l; i <= r; i++) {
    if (nums[ind] > nums[i]) ind = i
  }

  while (ind > l) {
    ;[nums[ind - 1], nums[ind]] = [nums[ind], nums[ind - 1]]
    ind--
  }

  for (let i = l + 2; i <= r; i++) {
    let j = i

    while (nums[j] < nums[j - 1]) {
      ;[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      j--
    }
  }
}

function getMid(a, b, c) {
  if (a > b) return getMid(b, a, c)
  if (a > c) return getMid(c, b, a)
  if (b > c) return getMid(a, c, b)

  return b
}
