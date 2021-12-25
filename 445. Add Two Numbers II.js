/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []
  const dummyHead = new ListNode(null, null)

  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carryover = 0
  while (stack1.length || stack2.length || carryover) {
    const item1 = stack1.pop() || 0
    const item2 = stack2.pop() || 0
    let sum = item1 + item2 + carryover
    carryover = 0

    if (sum > 9) {
      carryover = 1
    }
    sum = sum % 10
    const newNode = new ListNode(sum)
    const tmp = dummyHead.next
    dummyHead.next = newNode
    newNode.next = tmp
  }

  return dummyHead.next
}
