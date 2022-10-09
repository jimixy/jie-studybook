/**
 * 反转链表 II
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 */
function reverseBetween(head, left, right) {
  const prev = new ListNode(-1);
  const center = new ListNode(-1);
  const next = new ListNode(-1);
  let p = prev;
  let c = center;
  let n = next;
  let count = 0;
  while (head) {
    count++;
    if (count < left) {
      p.next = head;
      p = p.next;
    } else if (count >= left && count <= right) {
      p.next = null;
      c.next = head;
      c = c.next;
    } else {
      c.next = null;
      n.next = head;
      n = n.next;
    }
    head = head.next;
  }
  const reverse = (head) => {
    if (!head || !head.next) return head;
    const res = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return res;
  };
  const c2 = reverse(center.next);
  let s = c2;
  while (s.next) {
    s = s.next;
  }
  s.next = next.next;
  p.next = c2;
  return prev.next;
}

/**
 * 反转以 head 为起点的 n 个节点，返回新的头结点
 */
function reverseN(head, n) {
  let successor = null; // 后驱节点
  const reverse = (head, n) => {
    if (n == 1) {
      // 记录第 n + 1 个节点
      successor = head.next;
      return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    last = reverse(head.next, n - 1);
    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
  };
  return reverse(head, n);
}

/**
 * 解法二
 *
 */
function reverseBetween(head, left, right) {
  if (left == 1) {
    return reverseN(head, right);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
}
