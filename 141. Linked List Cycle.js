/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 变量：快慢指针，指向 head
  let slow = head;
  let fast = head;

  // 移动两个指针，速度差1倍
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // 在环中相遇（若有环），返回 true
    if (fast === slow) return true;
  }

  // 快指针到达链表尾部，两者未相遇，说明无环，返回 false
  return false;
};
