/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b)
  const n = citations.length
  let h = 1
  while (h <= n && citations[n - h] >= h) h++
  return h - 1
}
