/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = {}
  const u = new UnionSet(nums.length)

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]

    if (map[x] === undefined) {
      if (map[x - 1] !== undefined) {
        u.merge(map[x - 1], i)
      }

      if (map[x + 1] !== undefined) {
        u.merge(map[x + 1], i)
      }

      map[x] = i
    }
  }

  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (i === u.get(i) && u.cnt[i] > ans) {
      ans = u.cnt[i]
    }
  }

  return ans
}

class UnionSet {
  constructor(n) {
    this.fa = new Array(n + 1).fill(0).map((item, index) => index)
    this.cnt = new Array(n + 1).fill(1)
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    if (this.get(a) === this.get(b)) return

    this.cnt[this.get(b)] += this.cnt[this.get(a)]
    this.fa[this.get(a)] = this.get(b)
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
  const set = new Set(nums) // set存放数组的全部数字
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      // nums[i]没有左邻居，是序列的起点
      let cur = nums[i]
      let count = 1
      while (set.has(cur + 1)) {
        // cur有右邻居cur+1
        cur++ // 更新cur
        count++
      }
      max = Math.max(max, count) // cur不再有右邻居，检查count是否最大
    }
  }

  return max
}

// 笨猪爆破组解法
var longestConsecutive = (nums) => {
  let map = new Map()
  let max = 0
  for (const num of nums) {
    // 遍历nums数组
    if (!map.has(num)) {
      // 重复的数字不考察，跳过
      let preLen = map.get(num - 1) || 0 // 获取左邻居所在序列的长度
      let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度
      let curLen = preLen + 1 + nextLen // 新序列的长度
      map.set(num, curLen) // 将自己存入 map
      max = Math.max(max, curLen) // 和 max 比较，试图刷新max
      map.set(num - preLen, curLen) // 更新新序列的左端数字的value
      map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
    }
  }
  return max
}
