/**
 * 链表相交
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 */
const intersectionTwoList = (headA, headB) => {
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};
