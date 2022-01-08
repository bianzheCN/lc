/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const unionSet = new UnionSet22(isConnected.length)

  for (let i = 0; i < isConnected.length; i++) {
    const arr = isConnected[i]
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j]) {
        unionSet.merge(i + 1, j + 1)
      }
    }
  }

  return unionSet.fa.reduce((pre, cur, index) => {
    if (index === cur) {
      return pre + 1
    }

    return pre
  }, -1)
}

class UnionSet22 {
  constructor(n) {
    this.n = n
    this.fa = []

    for (let i = 0; i <= n; i++) {
      this.fa[i] = i
    }
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(this.fa[b])
  }
}
