/**
 * 53. 最大子数组和
 * https://leetcode-cn.com/problems/maximum-subarray/
 */

function maxSubArray(nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    // 如果当前和小于0，则重新开始
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
