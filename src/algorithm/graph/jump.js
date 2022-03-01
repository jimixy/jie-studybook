/**
 * 跳跃游戏 II
 *
 */

var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }
  return steps;
};

const result = jump([2, 3, 1, 1, 4]);
console.log(result);
