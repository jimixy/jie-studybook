/**
 * 两数相加 II
 * https://leetcode-cn.com/problems/add-two-numbers-ii/
 */

function addTwoNumbers(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let arr1 = [];
  let arr2 = [];
  for (let i = l1; i != null; i = i.next) {
    arr1.push(i.val);
  }
  for (let i = l2; i != null; i = i.next) {
    arr2.push(i.val);
  }
  let carry = 0;
  let result = null;
  while (arr1.length || arr2.length || carry) {
    let sum = carry;
    sum += arr1.length ? arr1.pop() : 0;
    sum += arr2.length ? arr2.pop() : 0;
    carry = parseInt(sum / 10);
    const cur = new ListNode(sum % 10);
    cur.next = result;
    result = cur;
  }
  return result;
}
