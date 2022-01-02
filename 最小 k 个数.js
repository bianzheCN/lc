/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  class MaxHeap {
    constructor(arr) {
      this.heap = []

      arr.forEach((item) => {
        this.insert(item)
      })
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
      const index = this.size()
      this.heap.push(value)

      this.siftUp(index)
    }

    siftUp(index) {
      let parent = this.getParentIndex(index)

      while (index > 0 && this.heap[parent] < this.heap[index]) {
        this.swap(parent, index)
        index = parent
        parent = this.getParentIndex(index)
      }
    }

    top() {
      return this.heap[0]
    }

    extract() {
      if (this.isEmpty()) return
      if (this.size() === 1) return this.heap.shift()

      const removedItem = this.heap[0]
      this.heap[0] = this.heap[this.size() - 1]
      this.heap.pop()

      this.siftDown(0)
      return removedItem
    }

    siftDown(index) {
      let element = index
      const left = this.getLeftIndex(index)
      const right = this.getRightIndex(index)

      if (index < this.size() && this.heap[left] > this.heap[element]) {
        element = left
      }

      if (index < this.size() && this.heap[right] > this.heap[element]) {
        element = right
      }

      if (element !== index) {
        this.swap(element, index)
        this.siftDown(element)
      }
    }
  }

  const heap = new MaxHeap(arr.slice(0, k))
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap.top()) {
      heap.extract()
      heap.insert(arr[i])
    }
  }

  return heap.heap
}
