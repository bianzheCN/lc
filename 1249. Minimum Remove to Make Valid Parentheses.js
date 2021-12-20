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

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let str = ""
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      str += s[i]
      cnt++
    } else if (s[i] !== ")") {
      str += s[i]
    } else {
      if (!cnt) continue
      cnt--
      str += s[i]
    }
  }

  let ret = ""
  let cnt2 = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ")") {
      ret = ")" + ret
      cnt2++
    } else if (str[i] !== "(") {
      ret = str[i] + ret
    } else {
      if (!cnt2) continue
      cnt2--
      ret = "(" + ret
    }
  }

  return ret
}
