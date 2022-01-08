/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const n = grid.length
  const m = grid[0].length
  let ans = 0

  const set = new UnionSetTemplate(m * n)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "0") continue

      // if top item is 1
      if (i > 0 && grid[i - 1][j] === "1")
        set.merge(getIndex(i - 1, j), getIndex(i, j))
      // if left item is 1
      if (j > 0 && grid[i][j - 1] === "1") {
        set.merge(getIndex(i, j - 1), getIndex(i, j))
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && set.get(getIndex(i, j)) === getIndex(i, j))
        ans++
    }
  }
  return ans

  function getIndex(i, j) {
    return i * m + j
  }
}

class UnionSetTemplate {
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
    this.fa[this.get(a)] = this.get(b)
  }
}
