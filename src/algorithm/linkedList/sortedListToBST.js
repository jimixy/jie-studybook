/**
 * 有序链表转换二叉搜索树
 * https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/description/
 */
function sortedListToBST(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  // 将有序数组转成二叉搜索树
  const build = (nums, left, right) => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = build(nums, left, mid - 1);
    root.right = build(nums, mid + 1, right);
    return root;
  };
  return build(res, 0, res.length - 1);
}

function sortedListToBST(head) {
  let len = 0;
  let p = head;
  while (p) {
    len++;
    p = p.next;
  }
  let cur = head;
  const build = (left, right) => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    const leftNode = build(left, mid - 1);
    const root = new TreeNode(cur.val);
    cur = cur.next;
    const rightNode = build(mid + 1, right);
    root.left = leftNode;
    root.right = rightNode;
    return root;
  };
  return build(0, len - 1);
}
