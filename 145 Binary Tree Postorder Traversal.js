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
 * @return {number[]}
 */
var postorderTraversal = function (root, ret = []) {
  // Recursion
  if (root) {
    postorderTraversal(root.left, ret)
    postorderTraversal(root.right, ret)
    ret.push(root.val)
  }

  return ret
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // Iteration
  const res = []
  const stack = [root]
  if (!root) return stack

  while (stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if (root.left) res.push(root.left)
    if (root.right) res.push(root.right)
  }

  return res
}
