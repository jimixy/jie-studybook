/**
 * 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list/submissions/
 */
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    // 保存下一次的next
    next = curr.next;
    // 将下一个的next指向前一个
    curr.next = prev;
    // 保存前一个的值
    prev = curr;
    // 指针往后移动
    curr = next;
  }
  return prev;
};

// 递归实现
const reverseList2 = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  const rev = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return rev;
};

// 虚拟头实现
const reverseList3 = (head) => {
  let dummy = new ListNode(-1);
  let cur = head;
  while (head) {
    // 缓存head
    cur = head;
    // 指针往后移动
    head = head.next;
    // 将下一个的next指向上一个
    cur.next = dummy.next;
    // 保存上一个的值
    dummy.next = cur;
  }
  return dummy.next;
};

// 递归实现2
function reverseList4(head) {
  if (head == null) return null;
  return reverse(head)[0];
}

/**
1. 参数
2. 返回值[头节点、不为 null 的尾节点]
3. 终止条件
 */
function reverse(node) {
  if (node.next == null) return [node, node];
  const [newHead, newTail] = reverse(node.next);
  node.next = null;
  newTail.next = node;
  return [newHead, node];
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

const arr = [1, 2, 6, 3, 4, 5, 6];
const list = new LinkedList(arr);
console.log(list.toString(), JSON.stringify(list));
console.log(JSON.stringify(reverseList3(list)));
