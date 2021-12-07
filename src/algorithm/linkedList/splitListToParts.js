/**
 * 分隔链表
 * https://leetcode-cn.com/problems/split-linked-list-in-parts/
 */

function splitListToParts(head, k) {
  let cur = head;
  let count = 0;
  let list = new Array(k).fill(null);
  while (cur) {
    count++;
    cur = cur.next;
  }
  let avg = Math.floor(count / k);
  let mod = count % k;
  for (let i = 0; i < k; i++) {
    let len = avg;
    if (mod > 0) {
      len++;
      mod--;
    }
    let node = head;
    let prev = null;
    for (let j = 0; j < len; j++) {
      prev = node;
      node = node.next;
    }
    if (prev) {
      prev.next = null;
    }
    list[i] = head;
    head = node;
  }
  return list;
}
