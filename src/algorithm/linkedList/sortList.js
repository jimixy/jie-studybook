/**
 * 148. 排序链表
 * https://leetcode-cn.com/problems/sort-list/
 */

function sortList(head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const rightHead = slow.next;
  slow.next = null;
  const left = sortList(head);
  const right = sortList(rightHead);
  return merge(left, right);
}

function merge(left, right) {
  let dummy = new ListNode(0);
  let cur = dummy;
  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left ? left : right;
  return dummy.next;
}
