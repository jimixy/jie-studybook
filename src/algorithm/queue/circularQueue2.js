/**
 * 设计循环双端队列
 * https://leetcode-cn.com/problems/design-circular-deque/
 */

function MyCircularDeque(k) {
  this.maxSize = k;
  this.queue = [];
  this.length = 0;
}

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.length >= this.maxSize) {
    return false;
  }
  this.queue.unshift(value);
  this.length++;
  return true;
};

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.length >= this.maxSize) {
    return false;
  }
  this.queue.push(value);
  this.length++;
  return true;
};

MyCircularDeque.prototype.deleteFront = function () {
  if (this.length <= 0) {
    return false;
  }
  this.queue.shift();
  this.length--;
  return true;
};

MyCircularDeque.prototype.deleteLast = function () {
  if (this.length <= 0) {
    return false;
  }
  this.queue.pop();
  this.length--;
  return true;
};

MyCircularDeque.prototype.getFront = function () {
  if (this.length <= 0) {
    return -1;
  }
  return this.queue[0];
};

MyCircularDeque.prototype.getRear = function () {
  if (this.length <= 0) {
    return -1;
  }
  return this.queue[this.length - 1];
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.length === 0;
};

MyCircularDeque.prototype.isFull = function () {
  return this.length === this.maxSize;
};
