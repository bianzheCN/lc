/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function (words, k) {
  let map = new Map()
  const compareFn = (a, b) => {
    if (!b) return false

    if (map.get(a) !== map.get(b)) {
      return map.get(a) > map.get(b)
    }

    return a < b
  }
  words.forEach((word) => {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1)
    } else {
      map.set(word, 1)
    }
  })
  console.log(map)

  const heap = new MinHeap(map, compareFn)
  for (const word of map.keys()) {
    heap.insert(word)

    if (heap.size() > k) heap.extract()
  }

  const ans = []
  while (heap.heap.length) {
    ans.unshift(heap.extract())
  }
  // return heap.heap.sort(compareFn)

  return ans
}

class MinHeap {
  constructor(map, compareFn) {
    this.heap = []
    this.map = map
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

    while (
      index < this.size() &&
      this.compareFn(this.heap[element], this.heap[left])
    ) {
      element = left
    }

    while (
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
