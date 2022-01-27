// smallestK K
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  select(arr, 0, arr.length - 1, k)
  return arr.slice(0, k)
}

function select(arr, l, r, k) {
  if (l >= r) return

  const pos = partition(arr, l, r)
  const num = pos - l + 1
  if (num === k) return
  else if (num > k) {
    return select(arr, l, pos - 1, k)
  } else {
    return select(arr, pos + 1, r, k - num)
  }
}

function partition(arr, l, r) {
  const index = parseInt(Math.random() * (r - l + 1)) + l
  ;[arr[r], arr[index]] = [arr[index], arr[r]]
  const pivot = arr[r]

  let i = l - 1
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  ;[arr[r], arr[i + 1]] = [arr[i + 1], arr[r]]
  return i + 1
}
