/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let ans = 0
  while (num && ++ans) num = num % 2 === 0 ? num / 2 : num - 1
  return ans
}

// https://juejin.cn/post/7059204919760257054
