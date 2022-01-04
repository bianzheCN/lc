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
  const dummyHead = new ListNode()

  while (head) {
    const next = dummyHead.next
    const next2 = head.next
    dummyHead.next = head
    head.next = next

    head = next2
  }

  return dummyHead.next
}

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
  let prev = null
  let cur = head

  while (cur) {
    const tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }

  return prev
}
