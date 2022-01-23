/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    arr.push({ val: nums[i], index: i })
  }
  return mergeSort(arr, 0, arr.length - 1, new Array(arr.length).fill(0))
}

function mergeSort(arr, l, r, ret) {
  if (l >= r) return ret
  const mid = (l + r) >> 1,
    temp = []
  let p1 = l,
    p2 = mid + 1,
    k = 0

  mergeSort(arr, p1, mid, ret)
  mergeSort(arr, p2, r, ret)

  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && arr[p1].val > arr[p2].val)) {
      ret[arr[p1].index] += r - p2 + 1
      temp[k++] = arr[p1++]
    } else {
      temp[k++] = arr[p2++]
    }
  }
  for (let i = l; i <= r; i++) {
    arr[i] = temp[i - l]
  }

  return ret
}
