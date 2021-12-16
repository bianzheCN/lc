/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capacity = k
  this.headIndex = 0
  this.queue = []
  this.count = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false

  this.headIndex = (this.headIndex - 1 + this.capacity) % this.capacity
  this.queue[this.headIndex] = value
  this.count++

  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false

  const tailIndex = (this.headIndex + this.count) % this.capacity
  this.queue[tailIndex] = value
  this.count++

  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false

  this.headIndex = (this.headIndex + 1) % this.capacity
  this.count--

  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false

  this.count--

  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1

  return this.queue[this.headIndex]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1

  return this.queue[(this.headIndex + this.count - 1) % this.capacity]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return !this.count
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  if (this.count === this.capacity) return true

  return false
}
