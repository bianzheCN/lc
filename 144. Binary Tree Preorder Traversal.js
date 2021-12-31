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
var preorderTraversal = function (root) {
  // recursion
  const ret = []
  if (!root) return ret

  const dfs = (root) => {
    ret.push(root.val)

    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }

  dfs(root)
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
var preorderTraversal = function (root) {
  // iteration
  const ret = []
  if (!root) ret
  const stack = []
  let cur = root

  while (cur || stack.length) {
    while (cur) {
      ret.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }

    cur = stack.pop().right
  }

  return ret
}
