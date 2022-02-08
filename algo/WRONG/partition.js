/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  const n = arr.length
  partition(arr, 0, n - 1, k)

  return arr.slice(0, k)
}

function partition(arr, l, r, k) {
  if (l >= r) return
  const index = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, l, index)
  const pivot = arr[l]

  let i = l,
    j = r
  while (i < j) {
    while (i < j && arr[j] >= pivot) j--
    while (i < j && arr[i] <= pivot) i++

    swap(arr, i, j)
  }

  swap(arr, l, i)
  if (i > k) partition(arr, l, i - 1, k)
  if (i < k) partition(arr, i + 1, r, k)
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
