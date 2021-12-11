/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 1 2 3 4 5 6
 *   p l   r s
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let leftNode, rightNode, pre, succ;
  const dummyHead = new ListNode(null, head);
  pre = dummyHead;

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  succ = rightNode.next;
  leftNode = pre.next;
  pre.next = null;
  rightNode.next = null;

  reverseList(leftNode);
  function reverseList(head) {
    let prev = null;
    let cur = head;

    while (cur) {
      const tmp = cur.next;

      cur.next = prev;
      prev = cur;
      cur = tmp;
    }

    return prev;
  }

  pre.next = rightNode;
  leftNode.next = succ;

  return dummyHead.next;
};
