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
var rotateRight = function (head, k) {
  if (!head) return null;
  if (!head.next) return head

  // 闭合为环
  let cur = head;
  let count = 2;

  while (cur.next) {
    cur = cur.next;
    count++;
  }
  // close tail to head
  cur.next = head;

  cur = head;
  // 1 2 3 4 5 6, k = 2
  // 4 5 6 1 2 3

  while (k--) {
    cur = cur.next;
  }
  const ret = cur.next;
  cur.next = cur.next.next;

  return ret;
};
