/**
 * 1658. 将 x 减到 0 的最小操作数
 * https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/
 */

/**
 * 解析：
 * 1. 由题意可知，每次从数组头部和数组尾部取元素出来，求最少可以取多少个元素？取下的元素之和是等于x, 剩下的元素之和是等于total - x, 可以将题目转为剩余的元素最多而且等于total -x的问题
 * 2. 用前缀和的方式找出子数组中最长而且和等于total - x的序列
 */
function minOperations(nums, x) {
  const target =
    nums.reduce((sum, cur) => {
      return sum + cur;
    }, 0) - x;
  let sum = 0;
  let maxLen = -1;
  for (let left = 0, right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > target) {
      sum -= nums[left++];
    }
    if (sum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen === -1 ? maxLen : nums.length - maxLen;
}
