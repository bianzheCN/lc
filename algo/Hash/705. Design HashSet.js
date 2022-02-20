var MyHashSet = function () {
  this.base = 769
  this.data = new Array(this.base).fill(0).map(() => new Array())
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.contains(key)) return
  const ind = this.hash(key)
  this.data[ind].push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const h = this.hash(key)
  const it = this.data[h]
  for (let i = 0; i < it.length; ++i) {
    if (it[i] === key) {
      it.splice(i, 1)
      return
    }
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const ind = this.hash(key)
  for (const x of this.data[ind]) {
    if (x === key) return true
  }

  return false
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hash = function (key) {
  return key % this.base
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
