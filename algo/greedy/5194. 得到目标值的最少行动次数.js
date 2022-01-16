// 周赛
// https://leetcode-cn.com/problems/minimum-moves-to-reach-target-score/

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  if (!maxDoubles) return target - 1

  let step = 0

  while (maxDoubles-- && target !== 1) {
    if (target % 2 !== 0) {
      step += 1
      target -= 1
    }
    target = target / 2
    step += 1
  }

  step += target - 1

  return step
}
