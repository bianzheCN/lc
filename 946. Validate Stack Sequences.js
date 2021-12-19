/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []

  for (let i = 0, j = 0; i < popped.length; i++) {
    while (
      j < pushed.length &&
      (!stack.length || stack[stack.length - 1] !== popped[i])
    ) {
      stack.push(pushed[j])
      j++
    }

    if (stack[stack.length - 1] !== popped[i]) return false
    stack.pop()
  }

  return true
}
