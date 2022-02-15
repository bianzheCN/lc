/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let indeg = new Array(numCourses).fill(0)
  let g = new Array(numCourses).fill(0).map(() => new Array())
  let q = []

  for (const x of prerequisites) {
    indeg[x[0]]++
    g[x[1]].push(x[0])
  }

  for (let i = 0; i < indeg.length; i++) {
    if (indeg[i] === 0) q.push(i)
  }

  const ret = []
  while (q.length) {
    const course = q.pop()
    ret.push(course)
    for (const c of g[course]) {
      indeg[c]--
      if (!indeg[c]) q.push(c)
    }
  }

  return ret.length === numCourses ? ret : []
}
