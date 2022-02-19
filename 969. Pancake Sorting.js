/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let ret = [],
    max

  while (arr.length > 1) {
    max = getMaxIndex(arr)
    max > 0 && ret.push(max + 1)
    reverse(arr, max)
    reverse(arr, arr.length - 1)
    ret.push(arr.length)
    arr.pop()
  }

  return ret
}

// get the index of the max value in arr
function getMaxIndex(nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[max]) {
      max = i
    }
  }

  return max
}

// reverse o - k elements
function reverse(arr, k) {
  if (k < 1) return

  let i = 0,
    j = k

  while (i < j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const ret = []
  for (let n = arr.length; n > 1; n--) {
    let index = 0
    for (let i = 1; i < n; i++) {
      if (arr[i] >= arr[index]) {
        index = i
      }
    }

    if (index === n - 1) {
      continue
    }

    if (index !== 0) {
      reverse(arr, index)
      ret.push(index + 1)
    }

    reverse(arr, n - 1)

    ret.push(n)
  }
  return ret
}

const reverse = (arr, end) => {
  for (let i = 0, j = end; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
