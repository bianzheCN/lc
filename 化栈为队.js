/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.popStack = []
  this.pushStack = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  console.log(this.popStack.toString())
  return this.popStack.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  const ret = this.popStack.pop()
  this.popStack.push(ret)
  return ret
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.pushStack.length && !this.popStack.length
}
