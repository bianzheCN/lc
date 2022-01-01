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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return recur(root) !== -1
}

function recur(root) {
  if (!root) return 0
  const left = recur(root.left)
  if (left === -1) return -1
  const right = recur(root.right)
  if (right === -1) return -1

  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
}
