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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  // 给整棵树编号
  // root 为 0，left 为 0，right 为 1
  // root.left 的 index 为 root 的 index * 2，root.right 的 index 为 root 的 index * 2 + 1
  // 定义 max 为最大值来记录宽度最大值，每层序号相减完毕后，和 max 进行比较，取最大值
  // width = rIndex - lIndex + 1
  if (!root) return 0

  // 定义一个二维数组存储当前层的序号和节点
  let max = 0,
    q = [[0n, root]]

  while (q.length) {
    let width = q[q.length - 1][0] - q[0][0] + 1n
    if (width > max) max = width
    let temp = []

    for (const [i, node] of q) {
      node.left && temp.push([i * 2n, node.left])
      node.right && temp.push([i * 2n + 1n, node.right])
    }

    q = temp
  }

  return max
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  const queue = [[root, 0]]
  let res = 0 // 全局维护最大值
  let left = 0 // 记录当前层最左边节点的计数值
  let right = 0 // 记录当前层最右边节点的计数值

  while (queue.length) {
    left = queue[0][1]
    const len = queue.length
    for (let i = 0; i < len; i++) {
      let [h, pos] = queue.shift()
      right = pos
      if (h.left) queue.push([h.left, 2 * (pos - left)]) // 重点，优化掉左边不需要计数的部分
      if (h.right) queue.push([h.right, 2 * (pos - left) + 1])
    }
    res = Math.max(res, right - left + 1)
  }

  return res
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  // way 1 的 `<< 1` 版本
  if (!root) return 0

  // 定义一个二维数组存储当前层的序号和节点
  let max = 0,
    q = [[0, root]]

  while (q.length) {
    let width = q[q.length - 1][0] - q[0][0] + 1
    if (width > max) max = width
    let temp = []

    for (const [i, node] of q) {
      node.left && temp.push([(i << 1) + 1, node.left])
      node.right && temp.push([(i << 1) + 2, node.right])
    }

    q = temp
  }

  return max
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0

  let q = [[0, root]],
    max = 0

  while (q.length) {
    const temp = []
    const length = q[q.length - 1][0] - q[0][0] + 1
    max = Math.max(max, length)

    for (const [index, node] of q) {
      node.left && temp.push([(index << 1) + 1, node.left])
      node.right && temp.push([(index << 1) + 2, node.right])
    }

    q = temp
  }

  return max
}
