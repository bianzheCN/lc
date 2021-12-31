/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const output = []
  if (!root) return output

  const traverse = (root) => {
    if (!root) {
      output.push(root.val)

      root.children.forEach((node) => traverse(node))
    }
  }
  traverse(root)

  return output
}
