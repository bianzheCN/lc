/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const arr1 = []
  const arr2 = []
  const ret = []

  inOrder(arr1, root1)
  inOrder(arr2, root2)

  let p1 = 0,
    p2 = 0
  while (p1 < arr1.length || p2 < arr2.length) {
    if (p2 >= arr2.length || (p1 < arr1.length && arr1[p1] <= arr2[p2])) {
      ret.push(arr1[p1++])
    } else {
      ret.push(arr2[p2++])
    }
  }

  return ret
}

function inOrder(arr, root) {
  if (!root) return

  if (root.left) inOrder(arr, root.left)
  arr.push(root.val)
  if (root.right) inOrder(arr, root.right)
}
