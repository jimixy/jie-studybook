/**
 * 循环队列
 * https://leetcode-cn.com/problems/design-circular-queue/
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.dataStore = [];
  this.front = 0;
  this.tail = 0;
  this.length = 0;
  // 初始化队列的容量
  this.capacity = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.length >= this.capacity) {
    return false;
  }
  this.dataStore[this.tail] = value;
  this.tail = (this.tail + 1) % this.capacity;
  this.length++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.length <= 0) {
    return false;
  }
  this.front = (this.front + 1) % this.capacity;
  this.length--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.length <= 0) {
    return -1;
  }
  return this.dataStore[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.length <= 0) {
    return -1;
  }
  return this.dataStore[(this.tail + this.capacity - 1) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.length === this.capacity;
};
