/**
 * 队列
 */

class Queue {
  constructor() {
    this.dataStore = [];
  }
  // 入队
  enqueue(element) {
    this.dataStore.push(element);
  }
  // 出队
  dequeue() {
    return this.dataStore.shift();
  }
  // 队首
  front() {
    return this.dataStore[0];
  }
  // 队尾
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  isEmpty() {
    return this.dataStore.length === 0;
  }
}

var q = new Queue();
for (var i = 0; i < 6; ++i) {
  q.enqueue(i);
}
q.dequeue();
// console.log(q.toString());

/**
 * 循环队列
 * 特点：
 * 1. 通过设置头尾指针来标记队列的头尾，而不是去删除队列中的元素
 */

class LoopQueue {
  constructor(capacity) {
    this.dataStore = [];
    // 指向队列头部第 1 个有效数据的位置
    this.front = 0;
    // 下一个从队尾入队元素的位置
    this.tail = 0;
    this.length = 0;
    // 初始化队列的容量
    this.capacity = capacity;
  }
  enqueue(element) {
    if (this.length >= this.capacity) {
      return false;
    }
    this.dataStore[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
    this.length++;
    return true;
  }
  dequeue() {
    if (this.length <= 0) {
      return false;
    }
    var element = this.dataStore[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.length--;
    return element;
  }
  // 获取队首元素
  front() {
    if (this.length <= 0) {
      return false;
    }
    return this.dataStore[this.front];
  }
  // 获取队尾元素
  back() {
    if (this.length <= 0) {
      return false;
    }
    // 因为this.tail是指向下一个元素的，所以需要减一
    const index = (this.tail - 1 + this.capacity) % this.capacity;
    return this.dataStore[index];
  }
  full() {
    return this.length === this.capacity;
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this.dataStore = [];
    this.length = 0;
    this.front = 0;
    this.tail = 0;
  }
  toString() {
    var retStr = "";
    for (var i = 0; i < this.length; ++i) {
      retStr += this.dataStore[(this.front + i) % this.capacity] + "\n";
    }
    return retStr;
  }
}

const loopQueue = new LoopQueue(5);
for (var i = 0; i < 5; ++i) {
  loopQueue.enqueue(i);
}
loopQueue.dequeue();
// loopQueue.enqueue(5);
const a = loopQueue.back();
console.log("s0", a);
console.log("s1", loopQueue.toString());
