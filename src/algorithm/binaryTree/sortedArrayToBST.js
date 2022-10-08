/**
 * 将有序数组转换为二叉搜索树
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/
 */

function sortedArrayToBST(nums) {
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
  return build(nums, 0, nums.length - 1);
}
