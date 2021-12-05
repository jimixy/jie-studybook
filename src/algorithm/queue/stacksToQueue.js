/**
 * 化栈为队
 * https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 * 分析：
 * 1. 栈A用来存放入队元素，栈B用来获取出队元素
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.A = [];
  this.B = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.A.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.A.length) {
    this.B.push(this.A.pop());
  }
  const head = this.B.pop();
  while (this.B.length) {
    this.A.push(this.B.pop());
  }
  return head;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.A[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.A.length === 0;
};
