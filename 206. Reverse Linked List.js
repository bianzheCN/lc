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
var reverseList = function (head) {
  const dummyHead = new ListNode(null);
  let cur = dummyHead;

  while (head) {
    const tmp = head.next;

    head.next = cur.next;
    cur.next = head;
    cur = tmp;
    head = tmp;
  }

  return dummyHead.next;
};
