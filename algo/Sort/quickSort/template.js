// smallestK K
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  // swap K smallest numbers to the left
  select(arr, 0, arr.length - 1, k)
  // slice them into new array then that would be the answer
  return arr.slice(0, k)
}

function select(arr, l, r, k) {
  // there is only one item
  if (l >= r) return

  const pos = partition(arr, l, r)
  // the length of item is pos - l  + 1
  const num = pos - l + 1
  if (num === k) return
  else if (num > k) {
    return select(arr, l, pos - 1, k)
  } else {
    return select(arr, pos + 1, r, k - num)
  }
}

function partition(arr, l, r) {
  // the pivot index would be any position in the array
  const index = parseInt(Math.random() * (r - l + 1)) + l
  // swap the item of the index to r position, which is the right-most
  ;[arr[r], arr[index]] = [arr[index], arr[r]]
  // so in this way, the pivot is arr[r], after swapped here
  const pivot = arr[r]

  // iterate from l, and make sure that from l to i, all of the items are smaller than or equals to pivot
  let i = l - 1
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  // so after the swapping, i + 2 is the last item that not larger than pivot
  ;[arr[r], arr[i + 1]] = [arr[i + 1], arr[r]]
  return i + 1
}
