/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 */

function moveZeroes(nums) {
  const moveZero = (arr, val) => {
    let fast = 0;
    let slow = 0;
    for (; fast < arr.length; fast++) {
      if (arr[fast] !== val) {
        arr[slow] = arr[fast];
        slow++;
      }
    }
    return slow;
  };
  let p = moveZero(nums, 0);
  for (; p < nums.length; p++) {
    nums[p] = 0;
  }
  return nums;
}

/**
 * 解法二
 */

function moveZeroes(nums) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] != 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++;
  }
  return nums;
}

/**
 * 解法三
 */
function moveZeroes(nums) {
  return nums.sort((a, b) => (b ? 0 : -1));
}
