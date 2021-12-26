/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const dummyHead = new ListNode(null, head)
  let cur = dummyHead

  while (cur && cur.next && val !== cur.next.val) {
    cur = cur.next
  }

  cur.next = (cur.next && cur.next.next) || null

  return dummyHead.next
}
