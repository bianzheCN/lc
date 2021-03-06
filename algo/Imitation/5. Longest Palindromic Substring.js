/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = ""
  const n = s.length
  for (let i = 0; i < n; i++) {
    let l = i,
      r = i,
      sub = getSub(s, l, r)
    ans = ans.length >= sub.length ? ans : sub
    ;(l = i), (r = i + 1), (sub = getSub(s, l, r))
    ans = ans.length >= sub.length ? ans : sub
  }

  function getSub(s, l, r) {
    while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
      l--
      r++
    }

    return s.slice(l + 1, r)
  }

  return ans
}

/**
 * I will expand the string from index i while i am traversing the original string param
 * before I do this, I wanna say that the expanding is actually should involve two scenarios,
 * one is that the result string is a odd-length, the other is even-length,
 * because for these two cases, the right border index of the string is gonna be different.
 *
 * Then it's about how to check if a sub-string is palindrome and compute the length of the answer which is the longest
 * palindrome string.
 * For checking the validness, I will decrement l and increment r when I am checking and after that return the valid string,
 * For compute the length of answer, I will compare the answer I got with the new valid string, updating the answer if what I
 * got is longer.
 * 
 * I this way, I believe it makes sense that I can get the right answer.
 */
