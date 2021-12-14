/**
 * @param {Node} head
 * @return {Node}
 */
let counter = 0
var copyRandomList = function (head, map = new Map()) {
    console.log(++counter)
  if (head === null) return null;

  if (!map.has(head)) {
    map.set(head, {
      val: head.val,
    });

    Object.assign(map.get(head), {
      next: copyRandomList(head.next, map),
      random: copyRandomList(head.random, map),
    });
  }

  return map.get(head);
};
