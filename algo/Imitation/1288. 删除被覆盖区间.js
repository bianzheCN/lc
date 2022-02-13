/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    const pre = intervals[i - 1]

    if (cur[0] >= pre[0] && cur[1] <= pre[1]) {
      intervals.splice(i, 1)
      i--
    } else if (cur[0] <= pre[0] && cur[1] >= pre[1]) {
      intervals.splice(i - 1, 1)
      i--
    }
  }

  return intervals.length
}
