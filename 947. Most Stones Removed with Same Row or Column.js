/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const u = new UnionSet(stones.length)
  const xMap = {}
  const yMap = {}

  stones.forEach((item, index) => {
    const x = item[0]
    const y = item[1]

    if (xMap[x] !== undefined) {
      u.merge(xMap[x], index)
    }
    if (yMap[y] !== undefined) {
      u.merge(yMap[y], index)
    }

    xMap[x] = index
    yMap[y] = index
  })

  let cnt = 0
  for (let i = 0; i < stones.length; i++) {
    if (u.get(i) === i) cnt++
  }

  return stones.length - cnt
}

class UnionSet {
  constructor(n) {
    this.fa = []
    for (let i = 0; i < n; i++) {
      this.fa[i] = i
    }
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
