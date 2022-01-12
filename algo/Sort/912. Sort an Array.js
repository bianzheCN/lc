/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return quickSort(nums)
}

function quickSort(arr = []) {
  if (arr.length <= 1) return arr

  const pivot = arr.splice(Math.floor(arr.length / 2), 1)
  const leftArr = []
  const rightArr = []

  arr.forEach((item) => {
    if (item < pivot) {
      leftArr.push(item)
    } else {
      rightArr.push(item)
    }
  })

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
