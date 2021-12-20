/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const left = []
  const right = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left.push(i)
    } else if (s[i] === ")") {
      if (left.length) {
        left.pop()
      } else {
        right.push(i)
      }
    }
  }

  const res = [...s],
    toBeDelIndexes = [...left, ...right]

  for (let i = 0; i < toBeDelIndexes.length; i++) {
    res[toBeDelIndexes[i]] = ""
  }

  return res.join("")
}
