/**
 *
 * @param {Array} arr
 * @param {Number} l
 * @param {Number} r
 */
function mergeSort(arr, l, r) {
  // only one item left or empty array
  if (l >= r) return
  const mid = (l + r) >> 1
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)

  const temp = [] // length is r - l + 1
  let k = 0, // last pos in the temp
    p1 = l, // first item on the left
    p2 = mid + 1 // first item on the right

  while (p1 <= mid || p2 <= r) {
    // right is empty or left is smaller
    if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
      temp[k++] = arr[p1++]
    } else {
      temp[k++] = arr[p2++]
    }
  }

  // copy into the origin arr
  for (let i = l; i <= r; i++) {
    arr[i] = temp[i - l]
  }
}
