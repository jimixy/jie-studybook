/**
 * 交换链表中的节点
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 分析：
 1. 创建一个数组，将链表节点放入数组中
 2. 通过索引，将数组中的节点交换
 注意：
 1. 数组k是从1开始的，所以k-1；
 2. 数组添加不要用push,push的性能会比较差；
 */

var swapNodes = function (head, k) {
  let arr = [];
  let i = 0;
  for (let k = head; k != null; k = k.next) {
    arr[i++] = k;
  }
  const rest = arr.length - k;
  let temp = arr[rest].val;
  arr[rest].val = arr[k - 1].val;
  arr[k - 1].val = temp;
  return head;
};
