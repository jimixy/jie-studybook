// 链表与递归

// 203. 移除链表元素
// https://leetcode-cn.com/problems/remove-linked-list-elements/
const removeElements = (head, val) => {
  while (head != null && head.val == val) {
    head = head.next;
  }
  if (head == null) {
    return null;
  }
  var prev = head;
  while (prev.next != null) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
};

// 使用虚拟头节点
const removeElements2 = (head, val) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};
