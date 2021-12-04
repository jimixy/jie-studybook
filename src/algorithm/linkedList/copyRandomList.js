/**
 * 复制带随机指针的链表
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 分析：
 * 1. 先将链表中的每个节点(val, next)复制一份，如 A->B->C, 则 A->A'->B->B'->C->C'
 * 2. 将原节点的random之间的关系同步到新插入的节点上
 * 3. 连接新插入的节点，同时断开和老节点之间的关系
 */

const copyRandomList = function (head) {
  if (head === null) {
    return null;
  }
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null);
    node.next = nodeNew;
  }
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next;
    nodeNew.random = node.random !== null ? node.random.next : null;
  }
  const headNew = head.next;
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next;
    node.next = node.next.next;
    nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
  }
  return headNew;
};
