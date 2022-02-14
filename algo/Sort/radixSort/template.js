/**
 *
 * @param {Array} arr
 * @param {Number} n
 */
function radixSort(arr, n) {
  const cnt = new Array(65536).fill(0)
  const temp = new Array(arr.length)

  // sort lwo 16
  for (let i = 0; i < n; i++) {
    // count
    cnt[arr[i] & 0xffff] += 1
  }
  // prefixSum
  for (let i = 1; i < 65536; i++) {
    cnt[i] += cnt[i - 1]
  }
  // placement
  for (let i = n - 1; i >= 0; i--) {
    temp[--cnt[arr[i] & 0xffff]] = arr[i]
  }

  for (let i = 0; i < 65536; i++) {
    cnt[i] = 0
  }

  // sort high 16
  // arr -> temp -> arr
  for (let i = 0; i < n; i++) cnt[temp[i] & 0xffff0000] += 1
  for (let i = 0; i < 65536; i++) cnt[i] += cnt[i - 1] // prefixSum
  for (let i = n - 1; i >= 0; i--) arr[--cnt[temp[i] & 0xffff0000]] = temp[i] // placement

  return arr
}
