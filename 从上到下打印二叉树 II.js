/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const q = []
  const res = []
  if (root) q.push(root)

  while (q.length) {
    const tmp = []
    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift()
      tmp.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    res.push(tmp)
  }

  return res
}
