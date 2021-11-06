/**
 * 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 */
function searchInsert(nums, target) {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
    let mid = low + Math.floor((height - low) / 2);
    if (nums[mid] >= target) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target));
