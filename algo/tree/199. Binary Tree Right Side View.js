// DFS
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
var rightSideView = function (root) {
  const rightmostValueAtDepth = {}
  let max_depth = -1

  const nodeStack = []
  const depthStack = []
  nodeStack.push(root)
  depthStack.push(0)

  while (nodeStack.length) {
    const node = nodeStack.pop()
    let depth = depthStack.pop()

    if (node) {
      // 维护二叉树的最大深度
      max_depth = Math.max(max_depth, depth)

      if (!rightmostValueAtDepth[depth]) rightmostValueAtDepth[depth] = node.val

      nodeStack.push(node.left)
      nodeStack.push(node.right)
      depthStack.push(depth + 1)
      depthStack.push(depth + 1)
    }
  }

  const rightView = []
  for (let depth = 0; depth <= max_depth; depth++) {
    rightView.push(rightmostValueAtDepth[depth])
  }

  return rightView
}

// BFS
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
var rightSideView = function (root) {
  const rightmostValueAtDepth = {}
  const nodeQueue = [root]
  const depthQueue = [0]
  const rightView = []
  let max_depth = -1

  while (nodeQueue.length) {
    const node = nodeQueue.shift()
    const depth = depthQueue.shift()

    if (node) {
      max_depth = Math.max(max_depth, depth)
      rightmostValueAtDepth[depth] = node.val

      nodeQueue.push(node.left)
      nodeQueue.push(node.right)
      depthQueue.push(depth + 1)
      depthQueue.push(depth + 1)
    }
  }

  for (let i = 0; i <= max_depth; i++) {
    rightView.push(rightmostValueAtDepth[i])
  }

  return rightView
}
