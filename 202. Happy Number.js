/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n,
    fast = n;

  // We will continue to move slow and fast till we can prove that n is a happy number or not
  while (fast !== 1) {
    slow = _next(slow);
    fast = _next(_next(fast));

    if (fast === slow) break;
  }

  function _next(num) {
    let ret = 0;

    while (num) {
      ret += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }

    return ret;
  }

  return fast === 1;
};
