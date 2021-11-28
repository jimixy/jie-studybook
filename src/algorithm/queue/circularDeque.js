/**
 * 设计循环双端队列
 * https://leetcode-cn.com/problems/design-circular-deque/
 * 参考：https://juejin.cn/post/7029280111773876261
 */
/**
 * @param {number} k
 */
function MyCircularDeque(k) {
  this.queue = new Array(k + 1); // 用来模拟队列的数组
  this.front = 0; // 头指针
  this.rear = 0; // 尾指针
  this.max = k; // 记录当前最大容器
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  this.front = (this.front + this.max) % (this.max + 1);
  this.queue[this.front] = value;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % (this.max + 1);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % (this.max + 1);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  // 删除队列元素的最后一个元素，那么尾指针rear，往前移动一位
  this.rear = (this.rear + this.max) % (this.max + 1);
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear + this.max) % (this.max + 1)];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return (this.rear - this.front + this.max + 1) % (this.max + 1) == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.rear - this.front + this.max + 1) % (this.max + 1) == this.max;
};
