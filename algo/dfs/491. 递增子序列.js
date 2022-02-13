/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const n = nums.length
  const ret = []
  const set = new Set()

  const dfs = (start, path) => {
    if (path.length >= 2) {
      const str = path.toString()
      if (!set.has(str)) {
        set.add(str)
        ret.push(path.slice())
      }
    }

    for (let i = start; i < n; i++) {
      const cur = nums[i]
      const pre = path[path.length - 1]
      if (!path.length || cur >= pre) {
        path.push(cur)
        dfs(i + 1, path)
        path.pop()
      }
    }
  }
  dfs(0, [])

  return ret
}
