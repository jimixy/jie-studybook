/**
 * 973. 最接近原点的 K 个点
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/
 */

/** 解法一 */
function kClosest(points, k = 1) {
  points.sort((a, b) => {
    return a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2);
  });
  return points.slice(0, k);
}

/** 解法二 */
function kClosest(points, k) {
  const map = new Map();
  points.forEach((j) => {
    map.set(j, j[0] ** 2 + j[1] ** 2);
  });
  const maxHeap = new MaxHeap(k);
  map.forEach((value, key) => {
    maxHeap.insert({ key, value });
  });
  return maxHeap.heap.map((k) => k.key);
}

class MaxHeap {
  constructor(max, compare = (a, b) => b.value - a.value) {
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
    // Math.floor((index - 1) / 2);
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
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
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
