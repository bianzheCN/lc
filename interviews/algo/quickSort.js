function quickSort(arr = []) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  arr.forEach((item) => {
    if (item <= pivot) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });

  leftArr.pop();

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
