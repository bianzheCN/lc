/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  if (s.length === 1 || goal.length === 1) return false

  if (s === goal) {
    for (const c of s) {
      // certain char in s shows more that two times in goal
      let start = 0
      let times = 0
      while (goal.indexOf(c, start) !== -1) {
        times++
        start = goal.indexOf(c, start) + 1
      }

      if (times >= 2) return true
    }

    return false
  }

  let index1, index2

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      // more than 2
      if (index1 !== undefined && index2 !== undefined) return false
      if (index1 === undefined) {
        index1 = i
      } else {
        index2 = i
      }
    }
  }

  if (index1 === undefined || index2 === undefined) return false
  if (s[index1] === goal[index2] && s[index2] === goal[index1]) return true
  return false
}
