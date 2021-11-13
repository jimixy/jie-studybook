/**
 * K个一组翻转链表
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */
function reverseKGroup(head, k) {
  if (!head || k === 1) {
    return head;
  }
  let cur = head;
  let count = 0;
  while (cur && count < k) {
    cur = cur.next;
    count++;
  }
  if (count === k) {
    cur = reverseKGroup(cur, k);
    // ？
    while (count--) {
      const temp = head.next;
      head.next = cur;
      cur = head;
      head = temp;
    }
    head = cur;
  }
  return head;
}

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

const arr1 = [1, 2, 3, 4, 5];
const list1 = new LinkedList(arr1);
console.log(list1.toString());
console.log(JSON.stringify(reverseKGroup(list1, 2)));
