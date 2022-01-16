/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // thinking in progress
  partition(nums, 0, nums.length - 1, 1)
}

function partition(arr, l, r, mid = 1) {
  let x = 0,
    y = r,
    i = l

  // loop invariant
  /**
   * [0, p0) = 0
   * [p0, i) = 1
   * (p2, arr.length - 1] = 2
   */

  while (i <= y) {
    // let x points to 1
    if (arr[i] === mid) {
      i++
    } else if (arr[i] < mid) {
      ;[arr[i], arr[x]] = [arr[x], arr[i]]
      x++
      i++
    } else if (arr[i] > mid) {
      ;[arr[y], arr[i]] = [arr[i], arr[y]]
      y--
    }
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let p0 = 0,
    p1 = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      ;[nums[i], nums[p1]] = [nums[p1], nums[i]]
      p1++
    } else if (nums[i] === 0) {
      ;[nums[p0], nums[i]] = [nums[i], nums[p0]]

      if (p0 < p1) {
        ;[nums[p1], nums[i]] = [nums[i], nums[p1]]
      }
      p0++
      p1++
    }
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let p0 = 0,
    p2 = n - 1
  for (let i = 0; i <= p2; ++i) {
    while (i <= p2 && nums[i] == 2) {
      const temp = nums[i]
      nums[i] = nums[p2]
      nums[p2] = temp
      --p2
    }
    if (nums[i] == 0) {
      const temp = nums[i]
      nums[i] = nums[p0]
      nums[p0] = temp
      ++p0
    }
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // partition the arr into 3 parts in one iteration
  const len = nums.length
  if (len < 2) {
    return
  }

  // all in [0, zero) = 0
  // all in [zero, i) = 1
  // all in [two, len - 1] = 2

  // 循环终止条件是 i == two，那么循环可以继续的条件是 i < two
  // 为了保证初始化的时候 [0, zero) 为空，设置 zero = 0，
  // 所以下面遍历到 0 的时候，先交换，再加
  let zero = 0

  // 为了保证初始化的时候 [two, len - 1] 为空，设置 two = len
  // 所以下面遍历到 2 的时候，先减，再交换
  let two = len
  let i = 0
  // 当 i == two 上面的三个子区间正好覆盖了全部数组
  // 因此，循环可以继续的条件是 i < two
  while (i < two) {
    if (nums[i] == 0) {
      swap(nums, i, zero)
      zero++
      i++
    } else if (nums[i] == 1) {
      i++
    } else {
      two--
      swap(nums, i, two)
    }
  }
}

function swap(nums, index1, index2) {
  const temp = nums[index1]
  nums[index1] = nums[index2]
  nums[index2] = temp
}
