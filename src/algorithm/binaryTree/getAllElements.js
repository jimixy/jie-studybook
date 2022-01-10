/**
 * 1305. 两棵二叉搜索树中的所有元素
 * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 */

function getAllElements(root1, root2) {
  const res = [];
  const recur = (root) => {
    if (!root) return;
    recur(root.left);
    res.push(root.val);
    recur(root.right);
  };
  recur(root1);
  recur(root2);
  return res.sort((a, b) => a - b);
}

/**
 * 解法二
 */
function getAllElements(root1, root2) {
  const list1 = [];
  const list2 = [];
  const dfs = (node, list) => {
    if (!node) return;
    dfs(node.left, list);
    list.push(node.val);
    dfs(node.right, list);
  };
  dfs(root1, list1);
  dfs(root2, list2);
  return merge(list1, list2);
}

function merge(list1, list2) {
  const len1 = list1.length;
  const len2 = list2.length;
  const list = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < len1 + len2; k++) {
    if (list2[j] == null) {
      list[k] = list1[i];
      i++;
    } else if (list1[i] <= list2[j]) {
      list[k] = list1[i];
      i++;
    } else if (list1[i] > list2[j]) {
      list[k] = list2[j];
      j++;
    } else {
      list[k] = list2[j];
      j++;
    }
  }
  return list;
}
