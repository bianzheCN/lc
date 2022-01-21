// Recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans

  const dfs = (root, p, q) => {
    if (!root) return false

    const l = dfs(root.left, p, q)
    const r = dfs(root.right, p, q)
    if ((l && r) || ((root.val === p.val || root.val === q.val) && (l || r)))
      ans = root

    return l || r || root.val == q.val || root.val === p.val
  }
  dfs(root, p, q)

  return ans
}

// Recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // return the LCA, if no LCA exists, return null

  // if traversed node is null, return null because empty tree doesn't contain p or q
  if (!root) return

  // if traversed node is p or q, the LCA is p, q or some node above
  // which means it cannot be some node below
  // so return the traversed node root
  if (root === q || root === p) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // left and right all have results, meaning that p and q locate at both left and right
  if (left && right) return root

  // only one has result, meaning that p and q all locate at one side of tree
  // both undefined, meaning p and q are not locate at the tree, return null
  return l || r
}
