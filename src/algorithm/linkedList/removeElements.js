/**
 * 203. 移除链表元素
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 */
const removeElements = (head, val) => {
  while (head != null && head.val == val) {
    head = head.next;
  }
  if (head == null) {
    return null;
  }
  var prev = head;
  while (prev.next != null) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
};

// 使用虚拟头节点
const removeElements2 = (head, val) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};

// 使用递归
const removeElements3 = (node, val) => {
  if (node.val === val) return node.next;
  node.next = removeElements3(node.next, val);
  return node;
};

/** 测试代码 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  val;
  next;
  constructor(arr) {
    if (arr == null || arr.length == 0) {
      throw new Error("arr is null or empty");
    }
    this.val = arr[0];
    let cur = this;
    for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i]);
      cur = cur.next;
    }
  }
  toString() {
    let cur = this;
    let str = "";
    while (cur != null) {
      str += cur.val + "->";
      cur = cur.next;
    }
    return str;
  }
}

const arr = [1, 2, 6, 3, 4, 5, 6];
const list = new LinkedList(arr);
console.log(list.toString());
console.log(removeElements3(list, 2));
console.log(list.toString());
