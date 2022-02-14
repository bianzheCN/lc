/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) return 0

  let pathSum = 0,
    cnt = 0
  const path = []
  const dfs = (root) => {
    pathSum += root.val
    path.push(root)
    if (pathSum === sum) cnt++

    let curSum = pathSum
    for (let i = 0; i < path.length - 1; i++) {
      const node = path[i]
      curSum -= node.val
      if (curSum === sum) cnt++
    }

    root.left && dfs(root.left)
    root.right && dfs(root.right)
    path.pop()
    pathSum -= root.val
  }
  dfs(root)

  return cnt
}
