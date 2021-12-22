/**
 * 丑数
 * https://leetcode-cn.com/problems/ugly-number/
 */

function isUgly(n) {
  if (n <= 0) {
    return false;
  }
  const nums = [2, 3, 5];
  for (const num of nums) {
    while (n % num === 0) {
      n /= num;
    }
  }
  return n == 1;
}
