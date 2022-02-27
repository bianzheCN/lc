function kSmallestPairs(nums1, nums2, k) {
  const n = nums1.length,
    m = nums2.length
  const ans = []

  let l = nums1[0] + nums2[0],
    r = nums1[n - 1] + nums2[m - 1]
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (check(mid, k, n, m, nums1, nums2)) r = mid
    else l = mid + 1
  }
  let x = r
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] + nums2[j] < x) {
        const temp = []
        temp.push(nums1[i])
        temp.push(nums2[j])
        ans.push(temp)
      } else break
    }
  }
  for (let i = 0; i < n && ans.length < k; i++) {
    let a = nums1[i],
      b = x - a,
      c = -1,
      d = -1,
      l = 0,
      r = m - 1
    while (l < r) {
      const mid = Math.floor((l + r) / 2)
      if (nums2[mid] >= b) r = mid
      else l = mid + 1
    }
    if (nums2[r] != b) continue
    c = r
    l = 0
    r = m - 1
    while (l < r) {
      const mid = Math.floor((l + r + 1) / 2)
      if (nums2[mid] <= b) l = mid
      else r = mid - 1
    }
    d = r
    for (let p = c; p <= d && ans.length < k; p++) {
      const temp = []
      temp.push(a)
      temp.push(b)
      ans.push(temp)
    }
  }

  return ans
}

function check(x, k, n, m, nums1, nums2) {
  let ans = 0
  for (let i = 0; i < n && ans < k; i++) {
    for (let j = 0; j < m && ans < k; j++) {
      if (nums1[i] + nums2[j] <= x) ans++
      else break
    }
  }
  return ans >= k
}
