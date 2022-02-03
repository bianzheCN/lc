/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const MODULO = Math.pow(10, 9) + 7
  const sums = []
  let index = 0
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = i; j < n; j++) {
      sum = (nums[j] + sum) % MODULO
      sums.push(sum)
      index++
    }
  }
  sums.sort((a, b) => a - b)
  const l = left - 1,
    r = right - 1
  let ans = 0

  for (let i = l; i <= r; i++) {
    ans = (ans + sums[i]) % MODULO
  }

  return ans
}

// compute all subarray sum

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const h = new Heap((a, b) => {
    if (!b) return false
    return a.sum > b.sum
  })

  for (let i = 0; i < n; i++) {
    h.insert(getData(i, i, nums[i]))
  }

  let ans = 0
  for (let i = 1; i <= right; i++) {
    const d = h.extract()
    if (i >= left) ans = (d.sum + ans) % 1000000007
    if (d.j + 1 < n) h.insert(getData(d.i, d.j + 1, d.sum + nums[d.j + 1]))
  }
  return ans
}

// i, j, sum 区间范围，区间和值
function getData(i, j, sum) {
  return { i, j, sum }
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

  swap(parent, index) {
    const arr = this.heap
    ;[arr[parent], arr[index]] = [arr[index], arr[parent]]
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

    if (index !== element) {
      this.swap(element, index)
      this.siftDown(element)
    }
  }

  top() {
    return this.heap[0]
  }
}

/**
 * ## 题目描述

https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/

## 分析

采取一种优于暴力解法的方法

如果用暴力法去解决问题，可以明显看到，我实际上是计算了所有的序列和，那么没有利用到题目给的 `left` 和 `right` 区间

那么有没有一种方法可以只计算到 `right`，截取 `left - right` 呢

## 算法

前缀和，堆（小顶堆）

### 合法性

随着字数组长度的增加，字数组的和值一定增加，因为都是正数

因此可以不断地寻找和最小的区间和

## 过程

我只想要 `left - right` 的字数组和，所以要找到一种可以减少计算量的方法

观察到题目要找的字数组区间，实际上是递增的关系，那么在一开始，我可以把 `nums` 的所有元素都放到堆中

不断取出元素，不断插入新的区间

如果已经取出了 `left - 1`(因为编号从 1 开始，也就是从 1 遍历到 left)，记录结果（求和）

如果该区间能向右移动（+1），堆中放入一个新的区间
 */