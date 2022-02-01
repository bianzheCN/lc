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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let ans = -1

  const dfs = (root, cur) => {
    if (!root) return
    if (root.val !== cur) {
      if (ans === -1) ans = root.val
      else ans = Math.min(ans, root.val)
    }

    root.left && dfs(root.left, cur)
    root.right && dfs(root.right, cur)
  }

  dfs(root, root.val)
  return ans
}
