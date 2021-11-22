/**
 * 最长递增子序列
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */
function lengthOfLis(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  // 存储每个元素的最长递增子序列长度
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 当前元素比前面的元素大，则更新dp[i]
      if (nums[i] > nums[j]) {
        // 当前元素的最长递增子序列长度 = 前面元素的最长递增子序列长度 + 1
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

function lengthOfLis2(nums) {
  // 存储每个元素的最长递增子序列长度
  const top = [];
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
    let poker = nums[i];
    // 找到比当前元素小的最大的元素
    let left = 0,
      right = piles;
    while (left < right) {
      let mid = (right + left) >> 1;
      if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 如果没有找到比当前元素大的，则插入到left位置
    if (left == piles) piles++;
    top[left] = poker;
  }
  return piles;
}

function lengthOfLis3(nums) {
  const n = nums.length;
  let max = 1;
  if (n <= 1) return n;
  const dp = [null, nums[0]];
  for (let i = 1; i < n; i++) {
    if (dp[max] < nums[i]) {
      dp[++max] = nums[i];
      continue;
    }
    // 二分查找
    let left = 1,
      right = max,
      mid;
    while (left <= right) {
      mid = (right + left) >> 1;
      if (dp[mid] < nums[i]) {
        //在左边
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // 替换掉比当前元素大的那个
    dp[left] = nums[i];
  }
  return max;
}

const nums = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLis2(nums));
