/**
 * 超级丑数
 * https://leetcode-cn.com/problems/super-ugly-number/
 */

function nthSuperUglyNumber(n, primes) {
  let arr = new Array(primes.length).fill(0);
  let dp = [1];
  for (let i = 1; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    primes.forEach((k, index) => {
      min = Math.min(min, dp[arr[index]] * k);
    });
    primes.forEach((k, index) => {
      if (dp[arr[index]] * k === min) {
        arr[index]++;
      }
    });
    dp[i] = min;
  }
  return dp[n - 1];
}
