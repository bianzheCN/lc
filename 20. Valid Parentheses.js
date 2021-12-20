/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let left = ["(", "{", "["]
  let right = [")", "}", "]"]
  const stack = []

  for (const c of s) {
    if (left.includes(c)) {
      stack.push(c)
    } else {
      const leftChar = stack.pop()
      const index = left.indexOf(leftChar)
      if (right[index] !== c) return false
    }
  }

  if (stack.length) return false

  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []

  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c)
    } else {
      const poppedItem = stack.pop()
      if (c === "]") {
        if (poppedItem !== "[") return false
      } else if (c === ")") {
        if (poppedItem !== "(") return false
      } else {
        if (poppedItem !== "{") return false
      }
    }
  }

  return !stack.length
}
