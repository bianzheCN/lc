/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  if (!head.next) return null;

  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      let tmp = head;
      while (tmp !== slow) {
        tmp = tmp.next;
        slow = slow.next;
      }

      return slow;
    }
  }

  return null;
};

/**
 *  There is two issues to be discussed on how we can find the entry node:
 *  
 *  1. The slow pointer and fast pointer will meet in one lap
 *  if the slow pointer has run past `x` in the circle which length is `n`.
 *  At the time the fast pointer come into it, the distance between them is `x` and fast pointer has to run `n - x` to
 *  catch it up.
 *  
 *  We already known that fast speed is two times than the slow one, so when they meet each other, the slow pointer
 *  has moved `n - x` nodes which would prove that they would meet in one lap.
 *   
 */
