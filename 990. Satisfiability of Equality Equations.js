/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const u = new UnionSet(26)
  for (const item of equations) {
    const c1 = item[0].charCodeAt() - 97
    const c2 = item[3].charCodeAt() - 97
    const mark = item[1]

    if (mark === "=") u.merge(c1, c2)
  }

  for (const item of equations) {
    const c1 = item[0].charCodeAt() - 97
    const c2 = item[3].charCodeAt() - 97
    const mark = item[1]

    if (mark === "!" && u.get(c1) === u.get(c2)) return false
  }

  return true
}

class UnionSet {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((item, index) => index)
  }

  get(x) {
    return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]))
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
