/**
 * 从尾到头打印链表
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */

// 数组的方法
function reversePrint(head) {
  let result = [];
  let cur = head;
  while (cur) {
    result.unshift(cur.val);
    cur = cur.next;
  }
  return result;
}

// 递归实现
function reversePrint2(head) {
  if (head == null) {
    return [];
  }
  return [...reversePrint2(head.next), head.val];
}

/** 测试代码 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class genListNode {
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
const list = new genListNode(arr);
// const result = reversePrint(list);
// const result = reversePrint2(list);
console.log(result);
