/**
 * 循环链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 步骤:
 * 1. 如果链表中存在环，则快慢指针相遇时，快指针一定会在环中;
 * 2. 如果链表中不存在环，则快指针一定会走到链表尾部;
 */

var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};
