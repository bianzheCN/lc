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
var longestUnivaluePath = function (root) {
  let res = 0
  const dfs = (root) => {
    if (!root) return 0

    const l = dfs(root.left)
    const r = dfs(root.right)
    let leftPath = 0,
      rightPath = 0
    if (root.left && root.left.val === root.val) {
      leftPath = l + 1
    }
    if (root.right && root.right.val === root.val) {
      rightPath = r + 1
    }

    res = Math.max(res, leftPath + rightPath)
    return Math.max(leftPath, rightPath)
  }
  dfs(root)

  return res
}
