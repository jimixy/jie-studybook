/**
 * 三数之和
 * https://leetcode-cn.com/problems/3sum/description/
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  const len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const values = twoSum(nums.slice(i + 1), nums[i], 0);
    result.push(...values);
  }
  return result;
}

function twoSum(arr, current, target) {
  let lo = 0;
  let hi = arr.length - 1;
  const result = [];
  const rest = target - current;
  while (lo < hi) {
    const sum = arr[lo] + arr[hi];
    const left = arr[lo];
    const right = arr[hi];
    if (sum === rest) {
      result.push([current, left, right]);
      while (lo < hi && arr[lo] === left) {
        lo++;
      }
      while (lo < hi && arr[hi] === right) {
        hi--;
      }
    } else if (sum < rest) {
      lo++;
    } else {
      hi--;
    }
  }
  return result;
}
