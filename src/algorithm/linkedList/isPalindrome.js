/**
 * 回文链表
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 */

let frontPointer;

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false;
    }
    if (currentNode.val !== frontPointer.val) {
      return false;
    }
    frontPointer = frontPointer.next;
  }
  return true;
};

var isPalindrome = function (head) {
  frontPointer = head;
  return recursivelyCheck(head);
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

const arr = [1, 3, 1];
const list = new LinkedList(arr);
console.log(list.toString());
console.log(isPalindrome(list));
