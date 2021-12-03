/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(null, null);

  if (!list1 || !list2) return list1 || list2;

  // make smaller node be the head
  if (list1.val < list2.val) {
    dummyHead.next = list1;
    list1 = list1.next;
  } else {
    dummyHead.next = list2;
    list2 = list2.next;
  }

  let cur = dummyHead.next;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      cur.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }

    cur = cur.next;
  }

  cur.next = list1 || list2;

  return dummyHead.next;
};
