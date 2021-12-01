/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const start = "START";
  const signed = "SIGN";
  const input = "INPUT";
  const end = "END";
  const _return = "RETURN0";
  let ret = "";
  let state = start;
  let sign = 1;

  const states = {
    [start]: [start, signed, input, end],
    [signed]: [end, _return, input, _return],
    [input]: [end, end, input, end],
    [end]: [end, end, end, end],
  };

  for (const c of s) {
    convertChar(c);
    if (state === _return) return 0;
  }

  function convertChar(c) {
    if (c === " ") {
      changeState(0);
    } else if (c === "+" || c === "-") {
      changeState(1);
    } else if (!isNaN(Number(c))) {
      changeState(2);
    } else {
      changeState(3);
    }

    if (state === signed) {
      if (c === "+") {
        sign = 1;
      } else {
        sign = -1;
      }
    }

    if (state === input) {
      ret += c;
    }
  }

  function changeState(index) {
    state = states[state][index];
  }

  const number = Number(ret);

  if (sign * number > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (sign * number < Math.pow(-2, 31)) return Math.pow(-2, 31);

  return sign * number;
};
