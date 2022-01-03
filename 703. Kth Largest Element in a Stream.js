/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k
  this.heap = new MinHeap()

  nums.forEach((item) => {
    this.add(item)
  })
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.insert(val)

  if (this.heap.size() > this.k) this.heap.extract()
  return this.heap.top()
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
  constructor() {
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

  isEmpty() {
    return this.heap.size === 0
  }

  swap(parent, index) {
    const arr = this.heap
    ;[arr[parent], arr[index]] = [arr[index], arr[parent]]
  }

  insert(value) {
    const index = this.size()
    this.heap.push(value)
    this.siftUp(index)
  }

  siftUp(index) {
    let parent = this.getParentIndex(index)

    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  extract() {
    if (!this.size()) return
    if (this.size() === 1) return this.heap.pop()

    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)

    return removedValue
  }

  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)

    if (index < this.size() && this.heap[left] < this.heap[element]) {
      element = left
    }

    if (index < this.size() && this.heap[right] < this.heap[element]) {
      element = right
    }

    if (element !== index) {
      this.swap(element, index)
      this.siftDown(element)
    }
  }

  top() {
    return this.heap[0]
  }
}
