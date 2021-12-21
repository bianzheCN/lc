/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const s = []

  for (let i = 0, j = 0; i < preorder.length; i = j + 1) {
    j = i
    while (j < preorder.length && preorder[j] !== ",") ++j
    s.push(preorder.slice(i, j))

    console.log(s.toString())
    let last = s.length - 1
    while (s.length >= 3 && s[last] === "#" && s[last - 1] === "#") {
      s[last - 2] = "#"
      s.pop()
      s.pop()
      last = s.length - 1
    }
    if (s.length === 2 && s[0] === "#" && s[1] === "#") return false
  }

  return s.length === 1 && s[0] === "#"
}
