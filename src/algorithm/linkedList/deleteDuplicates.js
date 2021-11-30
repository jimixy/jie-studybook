/**
 * 删除排序链表中的重复元素
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

function deleteDuplicates(head) {
  if (!head) return head;
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

/**
 * 删除排序链表中的重复元素 II
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */
function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(-1, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}

function deleteDuplicates2(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let fakeNode = new ListNode(-1, head);
  let cur = fakeNode;
  let hasDuplicate = false;
  while (cur) {
    if (cur.next && cur.next.next && cur.next.val == cur.next.next.val) {
      cur.next = cur.next.next;
      hasDuplicate = true;
    } else if (hasDuplicate) {
      cur.next = cur.next.next;
      hasDuplicate = false;
    } else {
      cur = cur.next;
    }
  }
  return fakeNode.next;
}

/** 测试代码 */
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
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

const arr = [0, 1, 1, 2, 3, 3, 4, 4, 5];
const list = new LinkedList(arr);
console.log(list.toString());
console.log(deleteDuplicates2(list));
