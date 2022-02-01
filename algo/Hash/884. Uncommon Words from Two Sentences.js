/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const map = new Map()
  const arr = (s1 + " " + s2).split(" ")
  const ret = []

  for (const x of arr) {
    map.set(x, map.get(x) ? map.get(x) + 1 : 1)
  }

  for (const x of map.keys()) {
    if (map.get(x) === 1) ret.push(x)
  }

  return ret
}
