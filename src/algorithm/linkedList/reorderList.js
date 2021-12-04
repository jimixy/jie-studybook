/**
 * 重排链表
 * https://leetcode-cn.com/problems/reorder-list/
 * 分析：
 * 1. 找出链表后半段需要重排的部分
 * 2. 反转后面需要重排的部分
 * 3. 将后面需要重排的部分插入到前面需要重排的部分之后
 */

/** 解法一 */
function reorderList(head) {
  if (!head || !head.next) return;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next;
  slow.next = null;
  second = reverseList(second);
  let dummy = new ListNode(0);
  let cur = dummy;
  while (head && second) {
    cur.next = head;
    head = head.next;
    cur = cur.next;
    cur.next = second;
    second = second.next;
    cur = cur.next;
  }
  if (head) cur.next = head;
  if (second) cur.next = second;
  return dummy.next;
}

function reverseList(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

/**
 * 解法二
 */
function reorderList2(head) {
  const arr = [];
  while (head) {
    const temp = head.next;
    head.next = null;
    arr.push(head);
    head = temp;
  }
  let cur = arr.shift(),
    i = 0;
  while (arr.length) {
    cur.next = i++ % 2 === 0 ? arr.pop() : arr.shift();
    cur = cur.next;
  }
}
