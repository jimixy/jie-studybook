/**
 * 面试题 02.08. 环路检测
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
 */

var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  fast = head;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
