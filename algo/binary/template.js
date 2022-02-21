function binarySearch(arr, n, x) {
  let head = 0,
    tail = n - 1,
    mid
  while (head <= tail) {
    mid = head + ((tail - head) >> 1)
    if (arr[mid] === x) return mid
    if (arr[mid] < x) {
      head = mid + 1
    } else {
      tail = mid - 1
    }
  }

  return -1
}

// generics
const a = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] // find the first 1
const b = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0] // find the last 1
// solution: use dual problem to solve b

// so we try to solve a
// binary -> goal: head and tail point to 1 -> if mid points to 1 during searching -> tail moves to mid(not mid - 1)
// -> if mid points to 0 during searching -> move head to mid + 1

// usage example: search the first to be larger than a certain value
// 0 can be abstract to values that do not fit condition
// 1s fit

function binarySearchV2(arr, n, x) {
  let head = 0,
    tail = n - 1,
    mid
  while (head < tail) {
    mid = head + ((tail - head) >> 1)
    if (arr[mid] === x) return mid
    if (arr[mid] < x) {
      head = mid + 1
    } else {
      tail = mid
    }
  }

  return -1
}
