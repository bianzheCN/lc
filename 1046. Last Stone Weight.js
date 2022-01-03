/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  class MaxHeap {
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

      if (index < this.size() && this.heap[left] > this.heap[element]) {
        element = left
      }

      if (index < this.size() && this.heap[right] > this.heap[element]) {
        element = right
      }

      if (index !== element) {
        this.swap(index, element)
        this.siftDown(element)
      }
    }
  }

  const heap = new MaxHeap()
  stones.forEach((item) => {
    heap.insert(item)
  })

  while (heap.size() > 1) {
    const s1 = heap.extract()
    const s2 = heap.extract()

    if (s1 === s2) continue
    const newStrone = s1 - s2
    heap.insert(newStrone)
  }

  return heap.size() ? heap.extract() : 0
}
