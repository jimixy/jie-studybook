/**
 * 分割链表
 * https://leetcode-cn.com/problems/partition-list-lcci/
 */

function partition(head, x) {
  if (!head) return null;
  let left = new ListNode(0);
  let right = new ListNode(0);
  let leftTail = left;
  let rightTail = right;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      leftTail.next = cur;
      leftTail = leftTail.next;
    } else {
      rightTail.next = cur;
      rightTail = rightTail.next;
    }
    cur = cur.next;
  }
  leftTail.next = right.next;
  rightTail.next = null;
  return left.next;
}
