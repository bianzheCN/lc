/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let p1 = m - 1,
    p2 = n - 1,
    tail = m + n - 1

  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0 || (p2 >= 0 && B[p2] >= A[p1])) {
      A[tail--] = B[p2--]
    } else {
      A[tail--] = A[p1--]
    }
  }

  return A
}
