/**
 * 栈的基本实现
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  clear() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  print() {
    console.log(this.data.toString());
  }
}

const stack = new Stack();
for (let i = 0; i < 6; i++) {
  stack.push(i);
  stack.print();
}
stack.pop();
stack.print();
