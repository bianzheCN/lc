// partition
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

// merge sort solution
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

  mergeSort(arr, 0, arr.length - 1)
  const ret = new ListNode()
  let p = ret
  for (const x of arr) {
      p.next = new ListNode(x, null)
      p = p.next
  }

  return ret.next
};

function mergeSort(arr, l, r) {
  if (l >= r) return

  const mid = (l + r) >> 1, temp = []
  let p1 = l, p2 = mid + 1, k = 0

  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)

  while (p1 <= mid || p2 <= r) {
      if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
          temp[k++] = arr[p1++]
      } else {
          temp[k++] = arr[p2++]
      }
  }

  for (let i = l; i <= r; i++) {
      arr[i] = temp[i - l]
  }
}

