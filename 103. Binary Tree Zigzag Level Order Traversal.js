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
var zigzagLevelOrder = function (root) {
  const res = []
  if (!root) return res
  const q = [root]
  let isLeft = true

  while (q.length) {
    const temp = []

    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift()
      if (isLeft) {
        temp.push(node.val)
      } else {
        temp.unshift(node.val)
      }

      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    isLeft = !isLeft

    res.push(temp)
  }

  return res
}
