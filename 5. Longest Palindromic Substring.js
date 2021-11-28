/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // expand around center
  let start = 0,
    end = 0,
    len = s.length;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  }

  for (let i = 0; i < len; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - ((len - 1) >>> 1);
      end = i + (len >>> 1);
    }
  }

  return s.slice(start, end + 1);
};

// dp
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
  let ret = "";

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > ret.length) {
        ret = s.slice(i, j + 1);
      }
    }
  }

  return ret;
};


