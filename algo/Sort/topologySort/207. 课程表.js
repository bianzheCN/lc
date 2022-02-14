/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // if circle detected, return false
  // use directed circle
  const indeg = new Array(numCourses).fill(0)
  const q = [] // topology sequence，push all nodes with 0 indeg to arr
  const g = new Array(numCourses).fill(0).map(() => new Array()) // a set indicates which nodes a node points to

  for (const x of prerequisites) {
    // calc indeg & direction
    //  x[1] -> x[0]
    indeg[x[0]]++ // indeg ++
    g[x[1]].push(x[0])
  }

  // push all nodes with 0 indeg to q
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) q.push(i)
  }

  // processs each node
  // each node we have put into q, is a node in topology sequence
  let cnt = 0 // nodes num in topology sequence
  while (q.length) {
    let ind = q.shift()
    cnt++
    for (const to of g[ind]) {
      indeg[to] -= 1
      if (indeg[to] === 0) q.push(to)
    }
  }

  return cnt === numCourses
}
