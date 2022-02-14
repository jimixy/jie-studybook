/**
 * 494. 目标和
 * https://leetcode-cn.com/problems/target-sum/
 */

function findTargetSumWays(nums, target) {
  if (!nums.length) {
    return 0;
  }
  return dfs(nums, 0, target);
  function dfs(nums, index, target) {
    if (index === nums.length) {
      return target === 0 ? 1 : 0;
    }
    const count =
      dfs(nums, index + 1, target - nums[index]) +
      dfs(nums, index + 1, target + nums[index]);
    return count;
  }
}

/**
 * 解法二
 * 带缓存的递归
 */
function findTargetSumWays(nums, target) {
  if (!nums.length) {
    return 0;
  }
  const map = new Map();
  return dfs(nums, 0, target);
  function dfs(nums, index, target) {
    if (index === nums.length) {
      return target === 0 ? 1 : 0;
    }
    const key = `${index}-${target}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const count =
      dfs(nums, index + 1, target - nums[index]) +
      dfs(nums, index + 1, target + nums[index]);
    map.set(key, count);
    return count;
  }
}
