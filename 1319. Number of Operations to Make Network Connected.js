/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1
  const u = new UnionSet(n)
  let cnt = 0

  // connect
  for (const item of connections) {
    const node1 = item[0]
    const node2 = item[1]

    u.merge(node1, node2)
  }

  // find disconnect numbers
  for (let i = 0; i < n; i++) {
    if (u.get(i) === i) cnt++
  }

  return cnt - 1
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
    this.fa[this.get(b)] = this.get(a)
  }
}
