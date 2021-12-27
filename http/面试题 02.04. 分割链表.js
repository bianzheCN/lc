/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const large = new ListNode()
  const small = new ListNode()
  let smallCur = small
  let largeCur = large

  while (head) {
    if (head.val < x) {
      smallCur.next = head
      smallCur = smallCur.next
    } else {
      largeCur.next = head
      largeCur = largeCur.next
    }

    head = head.next
  }
  largeCur.next = null
  smallCur.next = large.next

  return small.next
}
