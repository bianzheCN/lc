/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const heap = new MinHeap((a, b) => a > b)
  heap.insert(1)
  let ans

  while (n--) {
    ans = heap.extract()

    if (ans % 5 === 0) {
      heap.insert(ans * 5)
    } else if (ans % 3 === 0) {
      heap.insert(ans * 5)
      heap.insert(ans * 3)
    } else {
      heap.insert(ans * 5)
      heap.insert(ans * 3)
      heap.insert(ans * 2)
    }
  }

  return ans
}

class MinHeap {
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
    const index = this.size()
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

    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)

    return removedValue
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
