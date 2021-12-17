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
