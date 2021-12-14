/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, map = new Map()) {
  if (head === null) return null;

  if (!map.has(head)) {
    map.set(head, {
      val: head.val,
    });

    // take care that we should firstly create one node before we go deeper, or there never gonna be one node created
    Object.assign(map.get(head), {
      next: copyRandomList(head.next, map),
      random: copyRandomList(head.random, map),
    });
  }

  return map.get(head);
};

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
var copyRandomList = function (head) {
  if (!head) return null;

  // copy node val
  for (let node = head; node !== null; node = node.next.next) {
    const newNode = new Node(node.val, node.next, null);
    node.next = newNode;
  }

  // copy node random
  for (let node = head; node !== null; node = node.next.next) {
    const newNode = node.next;
    newNode.random = node.random && node.random.next;
  }

  let newHead = head.next;
  // unlink
  for (let node = head; node !== null; node = node.next) {
    const newNode = node.next;
    node.next = node.next.next;
    newNode.next = (newNode.next && newNode.next.next) || null;
  }

  return newHead;
};
