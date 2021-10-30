class ListNode {
  constructor(e, next = null) {
    this.e = e;
    this.next = next;
  }
}

class LinkedList {
  Node = ListNode;
  //  虚拟头节点
  dummyHead;
  size = 0;
  constructor() {
    this.dummyHead = new this.Node(null, null);
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  // 从0开始
  getNode(index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index is illegal.");
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    return prev;
  }
  add(index, e) {
    let prev = this.getNode(index);
    prev.next = new this.Node(e, prev.next);
    this.size++;
  }
  addFirst(e) {
    this.add(0, e);
  }
  addLast(e) {
    this.add(this.size, e);
  }
  // 从0开始
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index is illegal.");
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  }
  getFirst() {
    return this.get(0);
  }
  getLast() {
    return this.get(this.size - 1);
  }
  set(index, e) {
    let prev = this.getNode(index);
    prev.next.e = e;
  }
  contains(e) {
    let cur = this.dummyHead.next;
    while (cur) {
      if (cur.e === e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }
  remove(index) {
    let prev = this.getNode(index);
    let retNode = prev.next;
    prev.next = retNode.next;
    this.size--;
    retNode.next = null;
    return retNode.e;
  }
  removeFirst() {
    return this.remove(0);
  }
  removeLast() {
    return this.remove(this.size - 1);
  }
  toString() {
    let cur = this.dummyHead.next;
    let str = "";
    while (cur) {
      str += cur.e + ",";
      cur = cur.next;
    }
    return str;
  }
}

const list = new LinkedList();

const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   list.addFirst(item);
// });
// list.add(2, 666);
// console.log(list.toString(), list.get(0), list.getNode(0));

// list.remove(2);
// console.log(list.toString());

// 使用链表实现栈
class LinkedListStack {
  LinkedList = LinkedList;
  list;
  constructor() {
    this.list = new this.LinkedList();
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  push(e) {
    this.list.addFirst(e);
  }
  pop() {
    return this.list.removeFirst();
  }
  peek() {
    return this.list.getFirst();
  }
  toString() {
    return this.list.toString();
  }
}
// const stack = new LinkedListStack();
// arr.forEach((item) => {
//   stack.push(item);
// });
// console.log(stack.toString());
// console.log(stack.pop(), stack.toString());

// 使用链表实现队列
class LinkedListQueue {
  LinkedList = LinkedList;
  list;
  constructor() {
    this.list = new this.LinkedList();
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  enqueue(e) {
    this.list.addLast(e);
  }
  dequeue() {
    return this.list.removeFirst();
  }
  getFront() {
    return this.list.getFirst();
  }
  toString() {
    return this.list.toString();
  }
}
const queue = new LinkedListQueue();
arr.forEach((item) => {
  queue.enqueue(item);
});
console.log(queue.toString());
console.log(queue.dequeue(), queue.toString());
