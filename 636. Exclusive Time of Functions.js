/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = (n, logs) => {
  const stack = []
  const ret = []

  for (let i = 0, pre = 0; i < logs.length; i++) {
    const log = logs[i]
    const pos1 = log.indexOf(":")
    const pos2 = log.lastIndexOf(":")

    const id = Number(log.slice(0, pos1))
    const status = log.slice(pos1 + 1, pos2)
    const time = Number(log.slice(pos2 + 1))

    if (status === "start") {
      // 上一任务独占时间
      if (stack.length) {
        ret[stack[stack.length - 1]] += time - pre
      }

      pre = time
      stack.push(id)

      if (ret[id] === undefined) ret[id] = 0
    } else {
      ret[id] += time - pre + 1
      pre = time + 1
      stack.pop()
    }
  }

  return ret
}
