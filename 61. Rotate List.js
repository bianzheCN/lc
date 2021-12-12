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
  if (!head) return head;

  const dummyHead = new ListNode(null, head);
  let len = 1,
    ret = dummyHead;
  let cur = head;
  linkTailToHead();
  function linkTailToHead() {
    while (cur.next) {
      cur = cur.next;
      len++;
    }

    cur.next = head;
  }

  for (let i = 0; i < len - (k % len); i++) {
    ret = ret.next;
  }
  const tmp = ret.next;
  ret.next = null;

  if (ret === dummyHead) cur.next = null;

  return tmp;
};
