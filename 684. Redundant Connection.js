/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length
  const u = new UnionSet(n)
  let ret

  for (const item of edges) {
    const node1 = item[0]
    const node2 = item[1]

    if (u.get(node1) === u.get(node2)) {
      ret = item
    }
    u.merge(node1, node2)
  }

  return ret
}

class UnionSet {
  constructor(n) {
    this.fa = []
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i
    }
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    this.fa[this.get(b)] = this.get(a)
  }
}
