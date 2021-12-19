/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1,
    skip1 = 0,
    skip2 = 0

  while (p1 > 0 || p2 > 0) {
    while (p1 > 0) {
      if (s[p1] === "#") {
        skip1++, p1--
      } else if (skip1 > 0) {
        skip1--, p1--
      } else {
        break
      }
    }

    while (p2 > 0) {
      if (t[p2] === "#") {
        skip2++, p2--
      } else if (skip2 > 0) {
        skip2--, p2--
      } else {
        break
      }
    }

    if (s[p1] !== t[p2]) return false
  }

  return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1,
    skip1 = 0,
    skip2 = 0

  while (p1 >= 0 || p2 >= 0) {
    while (p1 >= 0) {
      if (s[p1] === "#") {
        skip1++, p1--
      } else if (skip1 > 0) {
        skip1--, p1--
      } else {
        break
      }
    }

    while (p2 >= 0) {
      if (t[p2] === "#") {
        skip2++, p2--
      } else if (skip2 > 0) {
        skip2--, p2--
      } else {
        break
      }
    }

    if (s[p1] !== t[p2]) return false
    p1--
    p2--
  }

  return true
}
