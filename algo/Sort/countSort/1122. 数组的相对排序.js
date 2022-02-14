/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const count = new Array(1001).fill(0)
  for (const x of arr1) {
    count[x]++
  }

  const res = []
  for (const x of arr2) {
    while (count[x]) {
      res.push(x)
      count[x]--
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i]) {
      res.push(i)
      count[i]--
    }
  }

  return res
}
