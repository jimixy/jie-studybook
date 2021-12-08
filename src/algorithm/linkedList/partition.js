/**
 * 分割链表
 * https://leetcode-cn.com/problems/partition-list-lcci/
 * 步骤：
 * 1. 创建两个链表，一个用于存储小于x的节点，一个用于存储大于x的节点
 * 2. 将原链表中的节点按照x的大小分别插入到两个链表中
 * 3. 将两个链表连接起来
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
  // 将最后一个节点的next设置为null
  rightTail.next = null;
  return left.next;
}
