/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  //  为什么要把 hours map 成 1 - 1 数组？
  //  因为题目要求我们返回的是最长的连续加班时间，如果每个 item 都是加班或不加班两种情况
  //  所以我们转化成 -1 1 数组，方便统计
  const hoursMap = hours.map((item) => (item > 8 ? 1 : -1))

  //  为什么要生成前缀数组？
  //  因为要找长度最长且和为 0 的子列，通过前缀数组可以通过 (arr[j] - arr[i]) 拿到 arr[i], arr[j] 的和
  //  需要做的是 prefixSum[j + 1] - prefixSum[i]
  //  需要注意的是，这里加了一个元素，方便累加
  const prefixSum = hoursMap.reduce(
    (prev, cur) => {
      prev.push(prev[prev.length - 1] + cur)
      return prev
    },
    [0]
  )

  //  为什么要从头找一个单调递减的数组
  //  对于 i < i1，如果 prefixSum[i] < prefixSum[i1] 那么 i1 一定被舍弃，原因是从 i 开始更长
  //  所以只有如果第一个 i 位置被舍弃，下一个位置的 i1 对应的 prefixSum[i1] 一定会小于 prefixSum[i]
  //  所以只有可能是递减数组中的某一项作为起始位置的 i

  //  最后，寻找 i, j 使得从 i 到 j 是最长合法序列的方法
  //  从后向前找 j，如果 prefixSum[j] > prefixSum[decrementalStack[-1]]，那么 (decrementalStack[-1], j) 合法
  //  再找下一个 i，看 (decrementalStack[-2], j) 是否合法，如果合法则记录下
  //  用此方法，则可找本体要求的最长序列
  const decrementalStack = [0]
  prefixSum.forEach((item, index) => {
    if (item < prefixSum[decrementalStack[decrementalStack.length - 1]])
      decrementalStack.push(index)
  })

  let res = 0
  for (let i = prefixSum.length - 1; i > 0; i--) {
    while (
      decrementalStack.length &&
      prefixSum[i] > prefixSum[decrementalStack[decrementalStack.length - 1]]
    ) {
      res = Math.max(res, i - decrementalStack[decrementalStack.length - 1])
      decrementalStack.pop()
    }
  }

  return res
}
