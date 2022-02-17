/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  let r = -1,
    l = -1
  //正向遍历记录最右区间值
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i]
    } else {
      r = i
    }
  }
  //反向遍历记录最左区间值
  let min = Number.MAX_SAFE_INTEGER
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] <= min) {
      min = array[i]
    } else {
      l = i
    }
  }
  return [l, r]
}
