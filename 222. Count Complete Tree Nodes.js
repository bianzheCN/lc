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
var countNodes = function (root) {
  let ret = 1
  if (!root) return 0

  const go = (cur) => {
    if (cur.left) {
      ret++
      go(cur.left)
    }

    if (cur.right) {
      ret++
      go(cur.right)
    }
  }

  go(root)

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
 * @return {number}
 */
var countNodes = function (root) {
  // exploit complete tree
  if (root == null) {
    // 递归的出口
    return 0
  }

  let lH, // 两侧高度
    rH = 0
  let lNode, // 两个指针
    rNode = root

  while (lNode) {
    // 计算左侧高度
    lH++
    lNode = lNode.left
  }
  while (rNode) {
    // 计算右侧高度
    rH++
    rNode = rNode.right
  }
  if (lH == rH) {
    // 当前子树是满二叉树，返回出节点数
    return 2 ** lH - 1 // 左移 n 位就是乘以2的n次方
  }

  // 当前子树不是完美二叉树，只是完全二叉树，递归处理左右子树
  return 1 + countNodes(root.left) + countNodes(root.right)
}
