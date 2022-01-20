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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  } else if (!p || !q) {
    return false
  } else if (p.val !== q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const q1 = [p]
  const q2 = [q]

  while (q1.length || q2.length) {
    const node1 = q1.shift()
    const node2 = q2.shift()

    if ((node1 && node1.val) !== (node2 && node2.val)) return false

    if (node1) {
      q1.push(node1.left)
      q1.push(node1.right)
    }

    if (node2) {
      q2.push(node2.left)
      q2.push(node2.right)
    }
  }

  return true
}
