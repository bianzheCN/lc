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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // deep first
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

var hasPathSum = function (root, targetSum) {
  // BFS
  if (!root) {
    return false
  }

  // BFS法 创建两个数组 一个记录所有节点 一个记录路径和
  const queue = []
  const res = []
  queue.push(root)
  res.push(root.val)

  // 进入BFS
  while (queue.length) {
    const top = queue.pop()
    const temp = res.pop()
    // 如果遍历到叶子节点处时 路径和=targetSum 则返回true
    if (top.left === null && top.right === null) {
      if (temp === targetSum) return true
    }
    // 如层序遍历一般更新queue与路径和数组
    if (top.left) {
      queue.push(top.left)
      res.push(temp + top.left.val)
    }
    if (top.right) {
      queue.push(top.right)
      res.push(temp + top.right.val)
    }
  }

  return false
}
