function findRedundantDirectedConnection(edges) {
  let numNodes = edges.length,
    edgeRemoved = -1,
    edgeMakesCycle = -1
  const parent = new Array(numNodes + 1).fill(0)

  for (let i = 0; i < numNodes; i++) {
    const u = edges[i][0]
    const v = edges[i][1]
    if (parent[v] != 0) {
      /* Assume we removed the second edge. */
      edgeRemoved = i
      break
    } else parent[v] = u
  }

  const uf = new UnionFind(numNodes)
  for (let i = 0; i < numNodes; i++) {
    if (i == edgeRemoved) continue
    const u = edges[i][0]
    const v = edges[i][1]
    if (!uf.union(u, v)) {
      edgeMakesCycle = i
      break
    }
  }

  /* Handle with the cyclic problem only. */
  if (edgeRemoved == -1) {
    return edges[edgeMakesCycle]
  }

  /* Handle with the cyclic problem when we remove the wrong edge. */
  if (edgeMakesCycle != -1) {
    const v = edges[edgeRemoved][1]
    const u = parent[v]
    return [u, v]
  }

  /* CHandle with the cyclic problem when we remove the right edge. */
  return edges[edgeRemoved]
}

class UnionFind {
  constructor(n) {
    this.parent = new Array(n + 1)
    this.rank = new Array(n + 1)
    for (let i = 1; i < n + 1; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }

  find = (x) => {
    const parent = this.parent
    const find = this.find
    if (parent[x] == x) return x
    return (parent[x] = find(parent[x]))
  }

  union = (x, y) => {
    const rootX = this.find(x)
    const rootY = this.find(y)
    const parent = this.parent
    const rank = this.rank

    if (rootX == rootY) return false
    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY
      rank[rootY] += rank[rootX]
    } else {
      parent[rootY] = rootX
      rank[rootX] += rank[rootY]
    }
    return true
  }
}
