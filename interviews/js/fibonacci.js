function _fibonacci(n) {
  const dp = [1, 1];
  let count = 2;

  // n < 2
  if (dp[n - 1]) return dp[n - 1];

  while (count <= n - 1) {
    dp[count] = dp[count - 1] + dp[count - 2];
    count++;
  }

  console.log(dp);
  dp[n - 1];
}

_fibonacci(6);
