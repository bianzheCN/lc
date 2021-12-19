/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = []

  for (let i = 0; i < ops.length; i++) {
    const item = ops[i]

    if (item === "+") {
      const item1 = stack.pop()
      const item2 = stack.pop()
      stack.push(item2, item1, item1 + item2)
    } else if (item === "D") {
      const item1 = stack.pop()
      stack.push(item1, item1 * 2)
    } else if (item === "C") {
      stack.pop()
    } else {
      stack.push(parseInt(item))
    }
  }

  return stack.reduce((prev, cur) => prev + cur)
}
