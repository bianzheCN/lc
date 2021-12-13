/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummyHead = new ListNode(null, head);
  let ret = dummyHead;

  let tmp = ret;
  while (tmp.next && tmp.next.next) {
    let pre = tmp.next,
      cur = tmp.next.next;

    pre.next = cur.next;
    cur.next = pre;
    tmp.next = cur;

    tmp = pre;
  }

  return ret.next;
};
