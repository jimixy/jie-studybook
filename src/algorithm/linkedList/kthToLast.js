/**
 * 返回倒数第 k 个节点
 * 分析：
 * 1. 双指针，一个指针先走 k 步，然后两个指针一起走，当 p2 指向最后一个节点时，p1 指向倒数第 k 个节点
 *
 * https://leetcode-cn.com/problems/kth-to-last-node-in-a-linked-list/
 */

// 双指针遍历
function kthToLast(head, k) {
  if (!head) return null;
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i++) {
    p2 = p2.next;
  }
  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1.val;
}

// 计数实现
var getKthFromEnd = function (head, k) {
  let cur = head;
  let sum = 0;
  while (cur) {
    cur = cur.next;
    sum++;
  }
  cur = head;
  let val = sum - k;
  while (val > 0 && cur) {
    cur = cur.next;
    val--;
  }
  return cur.val;
};

// 递归实现
function kthToLast2(head, k) {
  let result = null;
  function helper(head, k) {
    if (!head) return 0;
    const total = helper(head.next, k) + 1;
    if (total === k) {
      result = head.val;
    }
    return total;
  }
  helper(head, k);
  return result;
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

const arr = [1, 2, 3, 4, 5];
const list = new LinkedList(arr);
// const result = kthToLast(list, 2);
const result = kthToLast2(list, 1);
console.log(result);
