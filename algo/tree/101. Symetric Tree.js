// Iteration
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
var isSymmetric = function (root) {
  const stack = [root.left, root.right]

  while (stack.length) {
    const node1 = stack.pop()
    const node2 = stack.pop()

    if (!node1 && !node2) continue
    if (!node1 || !node2) return false
    if (node1.val !== node2.val) return false

    stack.push(node1.left)
    stack.push(node2.right)
    stack.push(node1.right)
    stack.push(node2.left)
  }

  return true
}

// Recursion
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
var isSymmetric = function (root) {
  const recursiveCompare = (l, r) => {
    if (!l && !r) return true
    if (!l || !r) return false

    return (
      l.val === r.val &&
      recursiveCompare(l.left, r.right) &&
      recursiveCompare(l.right, r.left)
    )
  }

  return recursiveCompare(root.left, root.right)
}
