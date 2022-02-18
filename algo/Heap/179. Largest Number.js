/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const h = new Heap((a, b) => {
    if (!b) return false
    return a + b < b + a
  })

  for (const x of nums) h.insert(String(x))
  let ret = ""
  while (!h.isEmpty()) {
    ret += h.extract()
  }

  if (ret[0] === "0") return "0"
  return ret
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
