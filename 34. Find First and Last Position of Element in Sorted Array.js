/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length;

  const binarySearch = (left = 0, right = n, target) => {
    while (left <= right) {
      const mid = left + ((right - left) >>> 1);
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    return left;
  };

  const tLeftIndex = binarySearch(0, n, target);
  if (!(nums[tLeftIndex] === target)) return [-1, -1];

  return [tLeftIndex, binarySearch(tLeftIndex, n, target + 1) - 1];
};

/**
 *  Explanation:
 *  
 *  When first find the left-most index for the target and check if the target exists in the array,
 *  if we `return left`, binary-search would help us and name it `leftIndex`.
 * 
 *  If such value of index in the array is not equals to the target, then there is no valid answer and we will return [-1, -1]
 * 
 *  Then we find the index when the `target` of the binary-search we are using is just 1 bigger than the target this question gives us.
 *  This way we will find the index where the value is just above the target in the array given,
 *  so what we gonna do is to get the index minus one and name it as `rightIndex`.
 * 
 *  Finally we will form our answer as `[leftIndex, rightIndex - 1]`
 */
