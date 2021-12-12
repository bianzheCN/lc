/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null;
  const dummyHead = new ListNode(null, head);
  let pre = dummyHead;

  do {
    pre.next = reverseList(pre.next, k);

    for (let i = 0; i < k; i++) {
      pre = pre && pre.next;
    }

    if (!pre) break;
  } while (true);

  function reverseList(head, k) {
    let pre = head,
      cur = head,
      count = k;

    // Check if remaining nodes serves k, including cur
    while (--count) {
      pre = pre && pre.next;
    }
    if (!pre) return head;

    pre = null;
    while (k--) {
      const tmp = cur.next;

      cur.next = pre;
      pre = cur;
      cur = tmp;
    }
    head.next = cur;

    return pre;
  }

  return dummyHead.next;
};
