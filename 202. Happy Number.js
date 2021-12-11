/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n,
    fast = n;

  // We will continue to move slow and fast till we can prove that n is a happy number or not
  while (fast !== 1) {
    slow = _next(slow);
    fast = _next(_next(fast));

    if (fast === slow) break;
  }

  function _next(num) {
    let ret = 0;

    while (num) {
      ret += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }

    return ret;
  }

  return fast === 1;
};

/**
 *  A good way to get started with a question like this is to make a couple of examples.
 *  Let's start with 7:
 *  7 ** 7 = 49
 *  4 ** 4 + 9 ** 9 = 97
 *  9 ** 9 + 7 ** 7 = 49 + 81 = 130
 *  1 + 9 = 10
 *
 *  => 1
 *
 *  And for another example 116:
 *  36
 *  9 + 36 = 45
 *  4 ** 4 + 5 ** 5 = 51
 *  5 ** 5 + 1 = 26
 *  2 ** 2 + 6 ** 6 = 40
 *  4 ** 4 = 16
 *  6 ** 6 + 1 = 37
 *  9 + 49 = 58
 *  25 + 64 = 89
 *  64 + 81 = 145
 *  16 + 25 = 51
 *  25 + 1 = 26
 *  4 + 36 = 40
 *
 *  => Cycle detected
 *
 *  So far we can imagine 3 scenarios for the number:
 *  Loop,
 *  1,
 *  infinity?
 *
 *  But will it go to infinity?
 *  Let's try this thing out that we will do the process to the numbers with different number of digits
 *  Let's make a table to showcase the result
 *
 *  Digits Largest          (Largest Next)
 *  1	    9	            81
 *  2	    99	            162
 *  3	    999	            243
 *  4	    9999	        324
 *  5       99999           405
 *  6       999999          567
 *  7       9999999         567
 *  8       99999999        729
 *  9       999999999       810
 *  10      9999999999      891
 *  11      99999999999     972
 *  12      999999999999    1053
 *  13      9999999999999   1134
 *  14      99999999999999  1215
 * 
 *  We can see that it definitely not gonna to up to sky to infinity, but after reach to certain high point, it will
 *  just decrease to 1 or loop around below that largest next.
 * 
 *  So we can start coding to find the loop or stop searching after she number reached to 1
 * 
 *  
 */
