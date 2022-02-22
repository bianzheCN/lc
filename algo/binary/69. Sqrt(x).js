/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let head = 0,
    tail = x,
    mid
  tail += 1
  for (let i = 0; i < 100; i++) {
    mid = head + (tail - head) / 2
    if (mid * mid <= x) head = mid
    else tail = mid
  }
  return Math.floor(head)
}

// if x = 10, what we are finding is that a max y that satisfies y * y = x
// y =   [0, 1, 2, 3, 4, 5]
// y^2 = [0, 1, 4, 9, 16, 25]

/**
 * So in this case, we will find 3, which is the last element(in y^2) that is less or equal to x
 * consequently, we can mark the poses that are less or equal to x as 1, from the last 1 on, all will be 0
 * which will perfectly fit our template
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0,
    r = x,
    ans = -1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (mid * mid <= x) {
      l = mid + 1
      ans = mid
    } else {
      r = mid - 1
    }
  }

  return ans
}
