function kWeakestRows(mat, k) {
  const m = mat.length,
    n = mat[0].length
  const q = new Heap((a, b) => {
    if (!b) return false
    if (a[0] !== b[0]) return a[0] < b[0]
    return a[1] < b[1]
  })
  for (let i = 0; i < m; i++) {
    let l = 0,
      r = n - 1

    while (l < r) {
      let mid = (l + r + 1) >> 1
      if (mat[i][mid] >= 1) l = mid
      else r = mid - 1
    }

    let cur = mat[i][r] >= 1 ? r + 1 : r
    if (q.size() == k && q.top()[0] > cur) q.extract()
    if (q.size() < k) q.insert([cur, i])
  }

  const ans = []
  let idx = k - 1
  while (!q.isEmpty()) ans[idx--] = q.extract()[1]

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
