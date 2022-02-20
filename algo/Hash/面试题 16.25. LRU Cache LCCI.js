/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.hash = new Hash()
  this.cnt = 0
  this.dummyHead = new ListNode()
  this.dummyTail = new ListNode()
  this.dummyHead.next = this.dummyTail
  this.dummyTail.next = this.dummyHead
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.hash.get(key)
  if (node === -1) return -1
  this.moveToHead(node)
  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.hash.get(key)
  if (node === -1) {
    if (this.capacity === this.cnt) this.removeLRUItem()
    let newNode = new ListNode(key, value)
    this.hash.set(key, newNode)
    this.addToHead(newNode)
    this.cnt++
  } else {
    node.value = value
    this.moveToHead(node)
  }
}

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.moveToHead = function (node) {
  this.removeFromList(node)
  this.addToHead(node)
}

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.removeFromList = function (node) {
  const next = node.next
  const prev = node.prev
  prev.next = next
  next.prev = prev
}

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.addToHead = function (node) {
  // 插入到虚拟头结点和真实头结点之间
  node.prev = this.dummyHead // node的prev指针，指向虚拟头结点
  node.next = this.dummyHead.next // node的next指针，指向原来的真实头结点
  this.dummyHead.next.prev = node // 原来的真实头结点的prev，指向node
  this.dummyHead.next = node // 虚拟头结点的next，指向node
}

/**
 * @return {void}
 */
LRUCache.prototype.removeLRUItem = function () {
  const tail = this.popTail()
  this.hash.delete(tail.key)
  this.cnt--
}

/**
 * @return {void}
 */
LRUCache.prototype.popTail = function () {
  const tail = this.dummyTail.prev
  this.removeFromList(tail)
  return tail
}

class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class Hash {
  constructor() {
    this.base = 697
    this.data = new Array(this.base).fill(0).map(() => new Array())
  }

  set(key, value) {
    const ind = this.hash(key)
    const it = this.data[ind]
    for (const x of it) {
      if (x[0] === key) {
        x[1] = value
        return
      }
    }
    it.push([key, value])
  }

  get(key) {
    const ind = this.hash(key)
    const it = this.data[ind]
    for (const x of it) {
      if (x[0] === key) return x[1]
    }

    return -1
  }

  delete(key) {
    const ind = this.hash(key)
    const it = this.data[ind]
    for (let i = 0; i < it.length; i++) {
      if (it[i][0] === key) {
        it.splice(i, 1)
        return
      }
    }
  }

  contains(key) {
    const ind = this.hash(key)
    const it = this.data[ind]
    for (const x of it) {
      if (x[0] === key) {
        return true
      }
    }

    return false
  }

  hash(key) {
    return key % this.base
  }
}
