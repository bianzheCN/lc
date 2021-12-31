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
  // recursion
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
  // iteration
  if (!root) return []
  const stack = [root]
  const ret = []

  while (stack.length) {
    const node = stack.pop()
    ret.push(node.val)

    stack.push(...node.children.reverse())
  }

  return ret
}
