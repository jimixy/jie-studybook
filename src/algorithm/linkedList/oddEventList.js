/**
 * 328. 奇数链表和偶数链表
 * https://leetcode-cn.com/problems/odd-even-linked-list/
 */
const oddEvenList = function (head) {
  if (head == null) {
    return head;
  }
  let odd = head;
  let evenHead = head.next;
  let even = evenHead;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
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

const arr = [1, 2, 3, 4, 5];
const list = new LinkedList(arr);
console.log(list.toString());
console.log(JSON.stringify(oddEvenList(list)));
