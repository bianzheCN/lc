var MyLinkedList = function () {
  this.head = null
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0) {
    return -1
  }
  let count = 0
  let cur = this.head
  if (!cur) return -1

  while (index !== count) {
    cur = cur.next
    count++

    if (!cur) return -1
  }

  return cur.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = { val, next: this.head }
  this.head = newNode
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.head
  const newNode = { val, next: null }
  if (!cur) {
    this.head = newNode

    return
  }

  while (cur.next) {
    cur = cur.next
  }

  cur.next = newNode
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = { val, next: null }
  if (index <= 0) {
    newNode.next = this.head
    this.head = newNode
  }
  if (!this.head) return

  let count = 1
  let cur = this.head
  while (index !== count) {
    count++

    cur = cur.next
    if (!cur) return
  }

  newNode.next = cur.next
  cur.next = newNode
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
    return
  }

  let cur = this.head
  let count = 1
  while (index !== count) {
    count++

    cur = cur.next
    if (!cur) return
  }

  cur.next = cur.next && cur.next.next
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
