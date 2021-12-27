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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0
  let cur = head
  const ret = new Array(k).fill(null)

  while (cur) {
    len++
    cur = cur.next
  }
  cur = head

  const quotient = Math.floor(len / k)
  let remainder = len % k

  for (let i = 0; i < k && cur; i++) {
    ret[i] = cur
    const partSize = quotient + (remainder-- > 0 ? 1 : 0)
    for (let i = 1; i < partSize; i++) {
      cur = cur.next
    }

    const next = cur.next
    cur.next = null
    cur = next
  }

  return ret
}
