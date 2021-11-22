/**
 * 验证二叉树的前序序列化
 * https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
 */

function isValidSerialization(preorder) {
  const split = preorder.split(",");
  let count = 1;
  let i = 0;
  const len = split.length;
  while (i < len) {
    if (count == 0) return false;
    if (split[i] === "#") {
      count--;
    } else {
      count++;
    }
    i++;
  }
  return count === 0;
}

isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#");
