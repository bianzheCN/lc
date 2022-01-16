/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const arr = []
  let index = 0

  while (index < s.length) {
    let cur = new Array(k).fill(fill)
    let count = 0
    while (count < k && index < s.length) {
      cur[count] = s[index++]
      count++
    }

    arr.push(cur.join(""))
  }

  return arr
}
