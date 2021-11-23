/**
 * 表现良好的最长时间段
 * https://leetcode-cn.com/problems/longest-well-performing-interval/
 */

function longestWPI(hours) {
  const n = hours.length;
  let res = 0;
  let sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    sum[i + 1] = sum[i] + (hours[i] > 8 ? 1 : -1);
    for (let j = 0; j <= i; ++j) {
      if (sum[i + 1] - sum[j] > 0) {
        res = Math.max(res, i + 1 - j);
        break;
      }
    }
  }
  return res;
}

const hours = [9, 9, 6, 0, 6, 6, 9];
console.log(longestWPI(hours));
