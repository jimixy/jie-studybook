/**
 * 11. 盛最多水的容器
 * https://leetcode-cn.com/problems/container-with-most-water/
 */

function maxArea(height) {
  let left = 0,
    right = height.length - 1;
  let res = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}
