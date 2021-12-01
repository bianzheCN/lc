/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const arr = [];
  let isStartPush = false;
  let isMinus = false;

  if (x < 0) {
    isMinus = true;
    x = -x;
  }

  while (x > 0) {
    const m = x % 10;
    if (!arr.length && m !== 0) {
      isStartPush = true;
    }

    isStartPush && arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  const number = Number(arr.join(""));

  if (number > Math.pow(2, 31)) return 0;

  return isMinus ? -number : number;
};
