/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freq = {}
  const h = new Heap((a, b) => freq[a] <= freq[b])
  for (const x of s) {
    if (freq[x]) {
      freq[x]++
    } else {
      freq[x] = 1
    }
  }
  for (const x of Object.keys(freq)) {
    h.insert(x)
  }

  let ret = ""
  while (!h.isEmpty()) {
    const c = h.extract()
    let f = freq[c]

    while (f--) {
      ret += c
    }
  }

  return ret
}

class Heap {
  constructor(compreFn) {
    this.compreFn = compreFn
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
    return this.heap.length === 0
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

    while (index > 0 && this.compreFn(this.heap[parent], this.heap[index])) {
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
      this.compreFn(this.heap[element], this.heap[left])
    ) {
      element = left
    }

    if (
      index < this.size() &&
      this.compreFn(this.heap[element], this.heap[right])
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
