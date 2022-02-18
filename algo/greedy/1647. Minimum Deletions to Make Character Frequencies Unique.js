/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = new Array(26).fill(0)
  let times = 0
  for (const x of s) {
    const code = x.charCodeAt() - 97
    map[code] += 1
  }

  for (let i = 0; i < 26; i++) {
    while (map[i] !== 0 && map.indexOf(map[i]) !== i) {
      map[i]--
      times++
    }
  }

  return times
}
