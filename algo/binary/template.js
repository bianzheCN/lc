function binarySearch(arr, n, x) {
  let head = 0,
    tail = n - 1,
    mid
  while (head <= tail) {
    mid = (head + (tail - head)) >> 1
    if (arr[mid] === x) return mid
    if (arr[mid] < x) {
      head = mid + 1
    } else {
      tail = mid - 1
    }
  }

  return -1
}
