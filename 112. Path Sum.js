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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // deep first
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // BFS
  if (!root) return false

  const q = [root]
  const v = [root.val]

  while (q.length) {
    const node = q.pop()
    const val = v.pop()

    if (!node.left && !node.right) {
      if (val === targetSum) return true
    }

    if (node.left) {
      q.push(node.left)
      v.push(val + node.left.val)
    }

    if (node.right) {
      q.push(node.right)
      v.push(val + node.right.val)
    }
  }

  return false
}
