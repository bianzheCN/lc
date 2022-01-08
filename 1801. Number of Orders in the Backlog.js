/**
 * @param {number[][]} orders
 * @return {number}
 *
 */
var getNumberOfBacklogOrders = function (orders) {
  const N = 10 ** 9 + 7
  const sellHeap = new Heap((a, b) => {
    if (!b) return false
    return a[0] > b[0]
  })
  const buyHeap = new Heap((a, b) => {
    if (!b) return false
    return a[0] < b[0]
  })
  // price amount type
  for (const order of orders) {
    // buy
    if (order[2] === 0) {
      while (
        order[1] !== 0 &&
        !sellHeap.isEmpty() &&
        sellHeap.top()[0] <= order[0]
      ) {
        const cnt = Math.min(sellHeap.top()[1], order[1])
        order[1] -= cnt
        sellHeap.top()[1] -= cnt

        if (!sellHeap.top()[1]) sellHeap.extract()
      }
      if (order[1]) {
        buyHeap.insert(order)
      }
    } else {
      // sell
      while (
        order[1] !== 0 &&
        !buyHeap.isEmpty() &&
        buyHeap.top()[0] >= order[0]
      ) {
        const cnt = Math.min(buyHeap.top()[1], order[1])
        order[1] -= cnt
        buyHeap.top()[1] -= cnt

        if (!buyHeap.top()[1]) buyHeap.extract()
      }

      if (order[1]) {
        sellHeap.insert(order)
      }
    }
  }

  let ans = 0
  for (const x of sellHeap.heap) {
    ans = (ans + x[1]) % N
  }
  for (const x of buyHeap.heap) {
    ans = (ans + x[1]) % N
  }

  return ans
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
