/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let leftIndex = mid;
      let rightIndex = mid;
      while (leftIndex > 0 && nums[leftIndex - 1] === target) {
        leftIndex--;
      }
      while (rightIndex < nums.length - 1 && nums[rightIndex + 1] === target) {
        rightIndex++;
      }
      return [leftIndex, rightIndex];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [-1, -1];
}
