# Sort

## One Side Recursion

### Benefit

space complexity

### Code

```javascript
// reduced half recursion process
function quick_sort_v2(arr, l, r) {
      while (l >= r) {
        let x = l,
          y = r,
          base = arr[l]

        while (x < y) {
          while (x < y && arr[y] >= base) y--
          if (x < y) arr[x++] = arr[y]

          while (x < y && arr[x] < base) x++
          if (x < y) arr[y--] = arr[x]
        }

        arr[x] = base
        quick_sort_v2(arr, x + 1, r)
        r = x - 1
      }
    }
```
