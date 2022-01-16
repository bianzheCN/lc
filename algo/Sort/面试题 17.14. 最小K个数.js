var smallestK = function(arr, k) {
  randomizedSelected(arr, 0, arr.length - 1, k);
  return arr.slice(0, k);
}

const randomizedSelected = (arr, l, r, k) => {
  if (l >= r) {
      return;
  }
  const pos = randomizedPartition(arr, l, r);
  const num = pos - l + 1;
  if (k === num) {
      return;
  } else if (k < num) {
      randomizedSelected(arr, l, pos - 1, k);
  } else {
      randomizedSelected(arr, pos + 1, r, k - num);
  }
}

// 基于随机的划分
const randomizedPartition = (nums, l, r) => {
  const i = parseInt(Math.random() * (r - l + 1)) + l;
  swap(nums, r, i);
  return partition(nums, l, r);
}

const partition = (nums, l, r) => {
  const pivot = nums[r];
  let i = l - 1;
  for (let j = l; j <= r - 1; ++j) {
      if (nums[j] <= pivot) {
          i = i + 1;
          swap(nums, i, j);
      }
  }
  swap(nums, i + 1, r);
  return i + 1;
}

const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}