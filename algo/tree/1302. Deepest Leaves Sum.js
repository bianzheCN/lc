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
var deepestLeavesSum = function (root) {
  const map = new Map()

  const bfs = (root, level) => {
    if (!root) return
    const curLevel = map.get(level)
    if (!curLevel) {
      map.set(level, root.val)
    } else {
      map.set(level, curLevel + root.val)
    }

    bfs(root.left, level + 1)
    bfs(root.right, level + 1)
  }

  bfs(root, 0)
  let cnt = 0
  for (const item of map.keys()) {
    cnt = Math.max(cnt, item)
  }

  return map.get(cnt)
}
