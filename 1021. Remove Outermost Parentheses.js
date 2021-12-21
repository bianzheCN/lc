/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ret = ""
  let opened = 0

  for (const c of s) {
    if (c === "(" && opened++ > 0) {
      ret += c
    }

    if (c === ")" && opened-- > 1) {
      ret += c
    }
  }

  return ret
}
