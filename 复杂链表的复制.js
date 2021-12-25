/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, map = new Map()) {
  if (!head) return null

  if (!map.has(head)) {
    map.set(head, {
      val: head.val,
    })

    Object.assign(map.get(head), {
      next: copyRandomList(head.next, map),
      random: copyRandomList(head.random, map),
    })
  }

  return map.get(head)
}

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, map = new Map()) {
  if (!head) return null

  // copy node.next
  for (let node = head; node !== null; node = node.next.next) {
    node.next = new Node(node.val, node.next)
  }

  // copy node.random
  for (let node = head; node !== null; node = node.next.next) {
    node.next.random =
      node.random && node.random.next
  }

  // unlink
  let copiedHead = head.next
  for (let node = head; node !== null; node = node.next) {
    const newNode = node.next
    node.next = node.next.next
    newNode.next = newNode.next && newNode.next.next
  }

  return copiedHead
}
