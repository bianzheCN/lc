/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  const dummyHead = new ListNode(null, head)
  let fast = dummyHead
  let slow = dummyHead

  while (k--) {
      fast = fast.next
  }

  while (fast) {
      fast = fast.next
      slow = slow.next
  }

  return slow.val
}
