/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  const n = events.length,
    max = Math.pow(10, 5),
    left = new Array(max + 1).fill(0).map(() => new Array()),
    h = new Heap((a, b) => {
      if (b === undefined) return false
      return a[1] > b[1]
    })

  let ans = 0

  for (let i = 0; i < n; i++) {
    const e = events[i]
    left[e[0]].push(e)
  }
  for (let i = 1; i <= max; i++) {
    for (const x of left[i]) {
      if (x[0] <= i) h.insert(x)
    }
    while (!h.isEmpty() && h.top()[1] < i) h.extract()
    if (!h.isEmpty()) {
      h.extract()
      ans++
    }
  }

  return ans
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
    ) {
      element = left
    }

    if (
      index < this.size() &&
      this.compareFn(this.heap[element], this.heap[right])
    ) {
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
