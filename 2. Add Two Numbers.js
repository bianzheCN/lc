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
 var addTwoNumbers = function(l1, l2) {
    let carryOver = 0
    let dummyHead = new ListNode()
    let curr = dummyHead
  
    let p = l1
    let q = l2
    
    while (p || q) {
        const x = p && p.val || 0
        const y = q && q.val || 0
        
        const sum = x + y + carryOver
        carryOver = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        
        p = p && p.next
        q = q && q.next
    }
    
    if (carryOver) curr.next = new ListNode(1)
    
    return dummyHead.next
};
