/**
 * 21. 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */
var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(-1);
  let m1 = l1;
  let m2 = l2;
  let cur = dummyHead;
  while (m1 && m2) {
    if (m1.val < m2.val) {
      cur.next = m1;
      m1 = m1.next;
    } else {
      cur.next = m2;
      m2 = m2.next;
    }
    cur = cur.next;
  }
  cur.next = m2 ? m2 : m1;
  return dummyHead.next;
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

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];
const list1 = new LinkedList(arr1);
const list2 = new LinkedList(arr2);
console.log(list1.toString());
console.log(JSON.stringify(mergeTwoLists(list1, list2)));
