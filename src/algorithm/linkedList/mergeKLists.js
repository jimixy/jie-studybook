/**
 * 23. 合并K个升序链表
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 */

function mergeKLists(lists) {
  let dummyHead = new ListNode(-1);
  let cur = dummyHead;
  let min = null;
  while (lists.length > 0) {
    min = null;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] == null) {
        continue;
      }
      if (min == null || lists[i].val < min.val) {
        min = lists[i];
      }
    }
    cur.next = min;
    cur = cur.next;
    if (!cur) {
      break;
    }
    lists[lists.indexOf(min)] = min.next;
  }
  return dummyHead.next;
}

/** 解法二 */
function mergeKLists(lists) {
  let prev = null;
  for (let i = 0; i < lists.length; i++) {
    if (!prev) {
      prev = lists[i];
      continue;
    }
    prev = mergeTwoLists(prev, lists[i]);
  }
  return prev;
}

var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1);
  let p1 = l1;
  let p2 = l2;
  let cur = dummy;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }
  // 如果有一条链表已经遍历完了，那么直接将另一个链表的剩余部分接到cur.next;
  cur.next = p1 ? p1 : p2;
  return dummy.next;
};

/**
 * 解法三
 */

function mergeKLists(lists) {
  if (!lists.length) return null;
  const dummy = new ListNode(-1);
  let cur = dummy;
  const minHeap = new MinHeap(lists.length);
  lists.forEach((k) => k && minHeap.insert(k));
  while (minHeap.size()) {
    const node = minHeap.pop();
    cur.next = node;
    cur = cur.next;
    node.next && minHeap.insert(node.next);
  }
  return dummy.next;
}

class MinHeap {
  constructor(max, compare = (a, b) => a.value - b.value) {
    this.heap = [];
    this.max = max;
    this.compare = compare;
  }
  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
    if (this.size() > this.max) {
      this.pop();
    }
  }
  getParentIndex(index) {
    return (index - 1) >> 1; // 二进制右移一位
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  siftUp(index) {
    if (index === 0) return;
    let parentIndex = this.getParentIndex(index);
    if (
      this.heap[index] &&
      this.compare(this.heap[index], this.heap[parentIndex]) < 0
    ) {
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }
  }
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return top;
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  siftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.compare(this.heap[leftIndex], this.heap[index]) < 0
    ) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.compare(this.heap[rightIndex], this.heap[index]) < 0
    ) {
      this.swap(rightIndex, index);
      this.siftDown(rightIndex);
    }
  }
  // 获取堆顶元素
  peak() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
