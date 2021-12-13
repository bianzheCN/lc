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
var deleteDuplicates = function (head) {
  if (!head) return null;

  const dummyHead = new ListNode(null, head);
  let slow = dummyHead,
    fast = dummyHead;

  while (fast) {
    if (slow.val !== fast.val) {
      slow.next = fast;
      slow = fast;
    }

    fast = fast.next;
  }
  slow.next = fast;

  return dummyHead.next;
};

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
var deleteDuplicates = function (head) {
  if (!head) return null;

  const dummyHead = new ListNode(null, head);
  let cur = dummyHead;

  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummyHead.next;
};
