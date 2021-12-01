/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  // valid indexes
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);

    max = Math.max(area, max);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
