/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    max = 0

  while (left < right) {
    const w = right - left
    const h = height[left] < height[right] ? height[left++] : height[right--]
    max = Math.max(w * h, max)
  }

  return max
}
