/**
 * 1658. 将 x 减到 0 的最小操作数
 * https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/
 */

/**
 * 解析：
 * 1. 由题意可知，每次从数组头部和数组尾部取元素出来，求最少可以取多少个元素？取下的元素之和是等于x, 剩下的元素之和是等于total - x, 可以将题目转为剩余的元素最多而且等于total -x的问题
 * 2. 用前缀和的方式找出子数组中最长而且和等于total - x的序列
 * 3. 采用滑动窗口，不断的增加right指针，直到right指针指向的元素和等于total - x，然后更新答案
 * 4. 此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right)，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。
 * 5. 滑动窗口：https://labuladong.gitee.io/algo/1/11/
 * /
function minOperations(nums, x) {
  const target =
    nums.reduce((sum, cur) => {
      return sum + cur;
    }, 0) - x;
  let sum = 0,
    maxLen = -1,
    left = 0,
    right = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum > target) {
      sum -= nums[left++];
    }
    if (sum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }
  return maxLen === -1 ? maxLen : nums.length - maxLen;
}
