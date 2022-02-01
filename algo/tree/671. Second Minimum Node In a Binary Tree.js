function findSecondMinimumValue(root) {
  const set = new Set()
  dfs(root)
  if (set.size < 2) return -1
  let first = Number.MAX_SAFE_INTEGER,
    second = Number.MAX_SAFE_INTEGER
  for (const i of set) {
    if (i <= first) {
      second = first
      first = i
    } else if (i <= second) {
      second = i
    }
  }
  return second

  function dfs(root) {
    if (root == null) return
    set.add(root.val)
    dfs(root.left)
    dfs(root.right)
  }
}
