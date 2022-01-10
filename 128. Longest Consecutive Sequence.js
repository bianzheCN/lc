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
      if (i === u.get(i) && (u.cnt[i] > ans)) {
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