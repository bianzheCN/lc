# QuickSort

## Basic

Better than **heap**(priority queue) in space, do not need extra space

### Partition

### Pivot

### Optimization

### Heap Sort

The **best scenario** for quick sort is that only do one partition, the array is sorted O(logn)

Switch from quick sort to **heap sort** when the recursion depth is larger than 2logn

### Insert Sort

When data amount is relatively small or is almost sorted

## Code

```javascript
function quickSort(arr = []) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  arr.forEach((item) => {
    if (item <= pivot) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });

  leftArr.pop();

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
```

```javascript
// With partition
function quickSortV1(arr, l, r) {
  // left and right pointer meets, we should stop here
  if  (l >= r) return

// find the leftmost one and the rightMost index
  let x = l, y = r, base = arr[l]
  while (x < y) {
    while (x < y && arr[y] >= base) y--
    if (x < y) arr[x++] = arr[y]

    while (x < y && arr[x] < base) x++
    if (x < y) arr[y--] = arr[x]
  }
  arr[x] = base

  quickSortV1(arr, l + 1, r)
  quickSortV1(arr, l, r - 1)

  return arr
} 
```

## Template

```javascript
function quick_sort_V3(arr, l, r) {
        quickSort(arr, l, r)
        final_insert_sort(arr, l, r)
      }

      const THRESHOLD = 16

      const getMid = (a, b, c) => {
        if (a > b) return getMid(b, a, c)
        if (a > c) return getMid(c, b, a)
        if (b > c) return getMid(a, c, b)

        return a
      }

      function quickSort(arr, l, r) {
        while (r - l > THRESHOLD) {
          let x = l,
            y = r,
            base = getMid(arr[l], arr[Math.floor((l + r) / 2)], arr[r]) // make sure it's not the min or max
          do {
            while (arr[x] < base) x++
            while (arr[y] > base) y--
            if (x <= y) {
              // swap
              ;[arr[x], arr[y]] = [arr[y], arr[x]]
              x++
              y--
            }
          } while (x <= y)

          // quick sort on right side
          quickSort(arr, x, r)
          r = y
        }
      }

      // insert sort to handle < 16 scenario
      function final_insert_sort(arr, l, r) {
        let ind = l

        // get index of the min value item
        for (let i = l + 1; i <= r; i++) {
          if (arr[i] < arr[ind]) ind = i
        }

        // swap along until the min value get to l
        while (ind > l) {
          ;[arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]]
          ind--
        }

        // insert sort
        // due to the leftmost is already an sorted one, we start from the 2th index
        for (let i = l + 2; i <= r; i++) {
          let j = i
          while (arr[j] < arr[j - 1]) {
            ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            j--
          }
        }
      }
```
