/**
 * 69. x 的平方根
 * https://leetcode-cn.com/problems/sqrtx/
 */

// 二分法
function mySqrt(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
