/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []

  return go(1, n)
}

function go(l, r) {
  if (l > r) return [null]

  if (l === r) return [new TreeNode(l)]

  const ans = []
  for (let i = l; i <= r; i++) {
    const left = go(l, i - 1)
    const right = go(i + 1, r)

    for (const node1 of left) {
      for (const node2 of right) {
        const root = new TreeNode(i)
        root.left = node1
        root.right = node2

        ans.push(root)
      }
    }
  }

  return ans
}
