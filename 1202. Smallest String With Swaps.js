/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const u = new UnionSet(s.length)
  const hArr = new Array(s.length).fill(0).map((item) => {
    return new MinHeap((a, b) => {
      return a > b
    })
  })

  pairs.forEach((item) => {
    u.merge(item[0], item[1])
  })

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    hArr[u.get(i)].insert(c)
  }

  console.log(...hArr.map((item) => item.heap))
  let ans = ""
  for (let i = 0; i < hArr.length; i++) {
    ans += hArr[u.get(i)].extract()
  }

  return ans
}

class UnionSet {
  constructor(n) {
    this.fa = []
    for (let i = 0; i < n; i++) {
      this.fa[i] = i
    }
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}

class MinHeap {
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
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index])) {
      this.swap(parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  extract() {
    if (this.isEmpty()) return
    if (this.heap.length === 1) return this.heap.pop()

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
