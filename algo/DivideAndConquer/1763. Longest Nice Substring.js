/**
 * @param {string} s
 * @return {string}
 */

function longestNiceSubstring(s) {
  const n = s.length
  let ans = ""
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (j - i + 1 > ans.length && check(s.slice(i, j + 1)))
        ans = s.slice(i, j + 1)
    }
  }

  function check(s) {
    const set = new Set()
    for (const c of s) set.add(c)
    for (const c of s) {
      const a = c.toLowerCase(),
        b = c.toUpperCase()
      if (!set.has(a) || !set.has(b)) return false
    }
    return true
  }

  return ans
}

// brute force
// check all substrings
// for each substring, I will firstly put each char into a set, so I can get a set has unique items from the substring
// then for each unique item I will check in this set, if there exists it's uppercase and lowercase, that would be true if it is

function longestNiceSubstring(s) {
  let maxPos = 0
  let maxLen = 0
  const dfs = (s, start, end) => {
    if (start >= end) {
      return
    }
    let lower = 0,
      upper = 0
    for (let i = start; i <= end; ++i) {
      if (Character.isLowerCase(s.charAt(i))) {
        lower |= 1 << (s.charAt(i) - "a")
      } else {
        upper |= 1 << (s.charAt(i) - "A")
      }
    }
    if (lower == upper) {
      if (end - start + 1 > maxLen) {
        maxPos = start
        maxLen = end - start + 1
      }
      return
    }
    let valid = lower & upper
    let pos = start
    while (pos <= end) {
      start = pos
      while (
        pos <= end &&
        (valid & (1 << (Character.toLowerCase(s.charAt(pos)) - "a"))) != 0
      ) {
        ++pos
      }
      dfs(s, start, pos - 1)
      ++pos
    }
  }

  dfs(s, 0, s.length() - 1)

  return s.slice(maxPos, maxPos + maxLen)
}

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (s.length < 2) return ""

  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i)
    if (
      (c < 97 && s.indexOf(String.fromCharCode(c + 32)) === -1) ||
      (c >= 97 && s.indexOf(String.fromCharCode(c - 32)) === -1)
    ) {
      const s1 = longestNiceSubstring(s.substring(0, i)),
        s2 = longestNiceSubstring(s.substring(i + 1))
      if (s1.length >= s2.length) return s1
      return s2
    }
  }

  return s
}

// Divide and Conquer
// if we tested that a char in the string do not satisfy the requirement of this question,
// the string that may satisfy can only be a substring which is formed by dividing with the pos
// of the char

