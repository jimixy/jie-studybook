/**
 * 删除中间节点
 * https://leetcode-cn.com/problems/delete-middle-node-lcci/
 */

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
