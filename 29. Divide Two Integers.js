/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const sign = (divisor > 0) ^ (dividend > 0);

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let ret = 0;
  while (divisor <= dividend) {
    let cur = 1;
    let accumulated = divisor;
    while (accumulated + accumulated <= dividend) {
      accumulated += accumulated;
      cur += cur;
    }
    ret += cur;
    dividend -= accumulated;
  }

  if (ret > 2 ** 31 - 1) {
    return sign ? -(2 ** 31) : 2 ** 31 - 1;
  }
  return sign ? -ret : ret;
};
