/**
 * 第 k 个数
 * https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 */

function getKthMagicNumber(k) {
  let i3 = 0,
    i5 = 0,
    i7 = 0;
  let dp = new Array(k);
  dp[0] = 1;
  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(3 * dp[i3], 5 * dp[i5], 7 * dp[i7]);
    if (dp[i] == 3 * dp[i3]) i3++;
    if (dp[i] == 5 * dp[i5]) i5++;
    if (dp[i] == 7 * dp[i7]) i7++;
  }
  return dp[k - 1];
}

const result = getKthMagicNumber(5);
console.log(result);
