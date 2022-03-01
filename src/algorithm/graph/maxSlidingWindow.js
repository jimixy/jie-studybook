/**
 * 239. 滑动窗口最大值
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MonotonicQueue {
  queue = [];
  push(n) {
    // queue里面最多只维护两个值
    while (this.queue.length && this.queue[this.queue.length - 1] < n) {
      this.queue.pop();
    }
    this.queue.push(n);
  }
  pop(n) {
    // 当要移除的值和当前最大值相等时才移除，因为比它小的值在push时就被移除了
    if (n === this.max) {
      this.queue.shift();
    }
  }
  get max() {
    return this.queue[0];
  }
}

function maxSlidingWindow(nums, k) {
  const queue = new MonotonicQueue();
  const res = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i < k - 1) {
      queue.push(nums[i]);
    } else {
      queue.push(nums[i]);
      res.push(queue.max);
      queue.pop(nums[i - k + 1]);
    }
  }
  return res;
}
