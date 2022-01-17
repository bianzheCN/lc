/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const h = new Heap((a, b) => {
    if (!b) return false
    return a.val > b.val
  })
  const ret = new ListNode()
  let p = ret

  for (const x of lists) {
    if (!x) continue
    h.insert(x)
  }

  while (!h.isEmpty()) {
    const cur = h.extract()

    p.next = cur
    if (cur.next) {
      h.insert(cur.next)
    }

    p = p.next
  }

  return ret.next
}

class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn
    this.heap = []
  }

  swap(parent, index) {
    const arr = this.heap
    ;[arr[parent], arr[index]] = [arr[index], arr[parent]]
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
