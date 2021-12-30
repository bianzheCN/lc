/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res

  const dfs = (node) => {
    if (!node) return
    dfs(node.right)
    if (!--k) return (res = node.val)
    dfs(node.left)
  }
  dfs(root)

  return res
}
