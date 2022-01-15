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
var sortList = function (head) {
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  cur = head

  quickSort(arr, 0, arr.length - 1)
  while (cur) {
    cur.val = arr.shift()
    cur = cur.next
  }

  return head
}

function quickSort(arr, l, r) {
  partition(arr, l, r)
  insertSort(arr, l, r)
}

function partition(arr, l, r) {
  while (r - l > 16) {
    let x = l,
      y = r,
      base = getMid(arr[l], arr[r], arr[Math.floor((r + l) / 2)])

    do {
      while (x < y && arr[x] < base) x++
      while (x < y && arr[y] > base) y--

      if (x < y) {
        ;[arr[x], arr[y]] = [arr[y], arr[x]]
        x++
        y--
      }
    } while (x < y)

    partition(arr, x + 1, r)
    r = x
  }
}

function getMid(a, b, c) {
  if (a > b) return getMid(b, a, c)
  if (a > c) return getMid(c, b, a)
  if (b > c) return getMid(a, c, b)

  return b
}

function insertSort(arr, l, r) {
  for (let i = l + 1; i <= r; i++) {
    let j = i

    while (arr[j] < arr[j - 1]) {
      ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      j--
    }
  }
}
