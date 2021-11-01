/**
 * 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
function removeNthFromEnd(head, n) {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let slow = dummyHead,
    fast = dummyHead;
  while (n-- > 0) {
    fast = fast.next;
  }
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
}

function removeNthFromEnd2(head, n) {
  if (!head) return null;
  let cur = head,
    sum = 1;
  while (cur && cur.next) {
    sum++;
    cur = cur.next;
  }
  const l = sum - n;
  sum = 1;
  cur = head;
  if (l == 0) {
    cur = cur.next;
    return cur;
  }
  while (cur && cur.next) {
    if (sum == l) {
      cur.next = cur.next.next;
    }
    sum++;
    cur = cur.next;
  }
  console.log(222, sum, l);
  return head;
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
console.log(list.toString(), JSON.stringify(list));
console.log(JSON.stringify(removeNthFromEnd2(list, 5)));
