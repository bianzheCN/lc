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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // use stack to store all of the left node
  const stack = []

  // keep storing when left node exist
  // pop a node when stack is not empty and root is null
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    // after pop a node, which is the current mid node, decrement k
    // and when k is 0, return the current root.val
    root = stack.pop()
    k--
    if (!k) return root.val
    root = root.right
  }
}
