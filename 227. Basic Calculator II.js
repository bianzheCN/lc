/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []
  let preSign = "+"
  let num = 0
  s = s.trim()
  const n = s.length

  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + Number(s[i])
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case "+":
          stack.push(num)
          break

        case "-":
          stack.push(-num)
          break

        case "*":
          stack.push(stack.pop() * num)
          break

        default:
          stack.push((stack.pop() / num) | 0)
          break
      }
      preSign = s[i]
      num = 0
    }
  }

  let ret = 0
  while (stack.length) {
    ret += stack.pop()
  }

  return ret
}
