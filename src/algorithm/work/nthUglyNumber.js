/**
 * 丑数 II
 * https://leetcode-cn.com/problems/ugly-number-ii/
 */

function nthUglyNumber(n) {
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  let dp = [1];
  for (let i = 1; i < n; i++) {
    let m2 = dp[i2] * 2;
    let m3 = dp[i3] * 3;
    let m5 = dp[i5] * 5;
    let min = Math.min(m2, m3, m5);
    if (min === m2) i2++;
    if (min === m3) i3++;
    if (min === m5) i5++;
    dp[i] = min;
  }
  return dp[n - 1];
}
