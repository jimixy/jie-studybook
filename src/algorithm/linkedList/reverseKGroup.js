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

var reverseKGroup = function (head, k) {
  if (head == null || head.next == null) return head;
  const arr = [];
  let i = 0;
  for (let m = head; m != null; m = m.next) {
    arr[i++] = m;
  }
  if (arr.length < k) {
    return head;
  }
  let prev = null;
  let len = arr.length;
  for (let j = k - 1; j < len; j += k) {
    let temp = arr[j];
    for (let s = j; s > j - k + 1; s--) {
      arr[s].next = arr[s - 1];
    }
    if (prev) {
      // 将上一次的尾部指向新的头部
      prev.next = arr[j];
    } else {
      // 第一次记录头节点
      head = arr[j];
    }
    // 上一次翻转后的尾部；
    prev = arr[j - k + 1];
    // 最后一次数量小于k个
    if (len - j - 1 < k) {
      prev.next = arr[j + 1];
    }
  }
  // 尾部没有多余节点
  if (arr.length % k === 0) {
    arr[arr.length - 1 - k + 1].next = null;
  }
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

const arr1 = [1, 2, 3, 4, 5];
const list1 = new LinkedList(arr1);
console.log(list1.toString());
console.log(JSON.stringify(reverseKGroup(list1, 2)));
