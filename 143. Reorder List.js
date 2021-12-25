/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return null

  const nodes = []
  let cur = head
  while (cur) {
    nodes.push(cur)
    cur = cur.next
  }

  let i = 0,
    j = nodes.length - 1
  while (i < j) {
    nodes[i].next = nodes[j]
    i++

    if (i === j) break
    nodes[j].next = nodes[i]
    j--
  }

  nodes[i].next = null
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return null

  // find the MIDth node
  const mid = findMid(head)

  // reverse mid right
  let l2 = reverse(mid.next)
  // set tail.next = null
  mid.next = null

  // merge
  let l1 = head
  while (l1 && l2) {
    l1_tmp = l1.next
    l2_tmp = l2.next

    l1.next = l2
    l1 = l1_tmp

    l2.next = l1
    l2 = l2_tmp
  }

  return head
}

function findMid(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(head) {
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
