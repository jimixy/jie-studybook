/**
 * 剑指 Offer 18. 删除链表的节点
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */
var deleteNode = function (head, val) {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let prv = dummyHead;
  let cur = dummyHead.next;
  while (cur) {
    if (cur.val == val) {
      prv.next = cur.next;
      break;
    }
    prv = prv.next;
    cur = cur.next;
  }
  return dummyHead.next;
};

/** 解法二 */
function deleteNode2(head, val) {
  if (!head) return null;
  if (head.val === val) {
    return head.next;
  }
  head.next = deleteNode2(head.next, val);
  return head;
}
