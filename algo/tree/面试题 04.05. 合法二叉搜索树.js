/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function (root) {
    const stack = []

    return inOrder(root, stack)
};

function inOrder(root, stack) {
    if (!root) return true
    let isValid = true
    if (root.left) isValid = inOrder(root.left, stack)
    if (stack.pop() >= root.val || !isValid) return false
    stack.push(root.val)

    isValid = inOrder(root.right, stack)
    return isValid
}