var MyHashMap = function () {
  this.base = 769
  this.data = new Array(this.base).fill(0).map(() => new Array())
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  // 对应数组 index
  const ind = this.hash(key)

  // 数组拉链
  for (const x of this.data[ind]) {
    // 查找每一个 tuple
    if (x[0] === key) {
      // 更新
      x[1] = value
      return
    }
  }

  // 设置 tuple
  this.data[ind].push([key, value])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const ind = this.hash(key)

  for (const x of this.data[ind]) {
    if (x[0] === key) {
      return x[1]
    }
  }

  return -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const ind = this.hash(key)
  const it = this.data[ind]
  for (let i = 0; i < it.length; i++) {
    const cur = it[i]
    if (cur[0] === key) {
      it.splice(i, 1)
      return
    }
  }
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.hash = function (key) {
  return key % this.base
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
