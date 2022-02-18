/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  let win = []
  const h = new Heap((a, b) => {
    if (!b) return false
    return a[1] < b[1]
  })
  // put k items initially to heap
  let cnt = k,
    l = 0
  while (cnt--) {
    h.insert([l, nums[l]])
    l++
  }
  win.push(h.top()[1])

  let left = 1
  while (left < n) {
    const r = left + k - 1
    if (r >= n) break
    console.log(left, r)
    h.insert([r, nums[r]])

    while (h.top()[0] < left) h.extract()
    win.push(h.top()[1])

    left++
  }

  return win
}

class Heap {
  constructor(compareFn) {
    this.heap = []
    this.compareFn = compareFn
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

  isEmpty() {
    return this.size() === 0
  }

  swap(parent, index) {
    const arr = this.heap
    ;[arr[parent], arr[index]] = [arr[index], arr[parent]]
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
    )
      element = left
    if (
      index < this.size() &&
      this.compareFn(this.heap[element], this.heap[right])
    )
      element = right

    if (index !== element) {
      this.swap(element, index)
      this.siftDown(element)
    }
  }

  top() {
    return this.heap[0]
  }
}
