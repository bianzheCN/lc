/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const freq = {}

  tasks.forEach((item) => {
    if (freq[item]) {
      freq[item]++
    } else {
      freq[item] = 1
    }
  })

  const m = Object.keys(freq).length
  const nextValids = new Array(m).fill(1)
  const rests = Object.values(freq)

  let time = 0
  for (let i = 0; i < tasks.length; i++) {
    let minNextValid = Number.MAX_SAFE_INTEGER
    time++
    for (let j = 0; j < nextValids.length; j++) {
      if (rests[j] > 0) {
        minNextValid = Math.min(minNextValid, nextValids[j])
      }
    }
    time = Math.max(time, minNextValid)

    let next = -1
    for (let j = 0; j < m; j++) {
      if (
        rests[j] > 0 &&
        nextValids[j] <= time &&
        (next === -1 || rests[next] < rests[j])
      ) {
        next = j
      }
    }

    rests[next]--
    nextValids[next] = time + n + 1
  }

  return time
}
