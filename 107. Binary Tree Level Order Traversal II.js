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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const res = []
  if (!root) return res
  const q = [root]

  while (q.length) {
    const temp = []
    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift()
      temp.push(node.val)

      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }

    res.unshift(temp)
  }

  return res
}
