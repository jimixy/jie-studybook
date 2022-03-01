/**
 * 跳跃游戏
 */

function canJump(nums) {
  let farthest = 0;
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest <= i) {
      return false;
    }
  }
  return farthest >= len - 1;
}

// canJump([0, 2, 3]);
// canJump([1, 0, 1, 0]);
