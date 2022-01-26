function minSwapsCouples(row) {
  const len = row.length
  const N = len >> 1
  const u = new DSU(N)
  for (let i = 0; i < len; i += 2) {
    u.merge(row[i] >> 1, row[i + 1] >> 1)
  }

  let cnt = 0
  for (let i = 0; i < N; i++) {
    if (u.get(i) !== i) cnt++
  }

  return cnt
}

class DSU {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((v, i) => i)
  }

  get(x) {
    return this.fa[x] === x ? x : this.get(this.fa[x])
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
