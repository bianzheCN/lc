/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const MODULO = Math.pow(10, 9) + 7
  const sums = []
  let index = 0
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = i; j < n; j++) {
      sum = (nums[j] + sum) % MODULO
      sums.push(sum)
      index++
    }
  }
  sums.sort((a, b) => a - b)
  const l = left - 1,
    r = right - 1
  let ans = 0

  for (let i = l; i <= r; i++) {
    ans = (ans + sums[i]) % MODULO
  }

  return ans
}

// compute all subarray sum

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const h = new Heap((a, b) => {
    if (!b) return false
    return a.sum > b.sum
  })

  for (let i = 0; i < n; i++) {
    h.insert(getData(i, i, nums[i]))
  }

  let ans = 0
  for (let i = 1; i <= right; i++) {
    const d = h.extract()
    if (i >= left) ans = (d.sum + ans) % 1000000007
    if (d.j + 1 < n) h.insert(getData(d.i, d.j + 1, d.sum + nums[d.j + 1]))
  }
  return ans
}

// i, j, sum 区间范围，区间和值
function getData(i, j, sum) {
  return { i, j, sum }
}

class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn
    this.heap = []
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  size() {
    return this.heap.length
  }

  swap(parent, index) {
    const arr = this.heap
    ;[arr[parent], arr[index]] = [arr[index], arr[parent]]
  }

  isEmpty() {
    return this.size() === 0
  }

  insert(value) {
    const index = this.heap.length
    this.heap.push(value)
    this.siftUp(index)
  }

  siftUp(index) {
    let parent = this.getParentIndex(index)

    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index])) {
      this.swap(parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  extract() {
    if (this.isEmpty()) return
    if (this.size() === 1) return this.heap.pop()

    const removedItem = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)

    return removedItem
  }

  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)

    if (
      index < this.size() &&
      this.compareFn(this.heap[element], this.heap[left])
    ) {
      element = left
    }

    if (
      index < this.size() &&
      this.compareFn(this.heap[element], this.heap[right])
    ) {
      element = right
    }

    if (index !== element) {
      this.swap(element, index)
      this.siftDown(element)
    }
  }

  top() {
    return this.heap[0]
  }
}
