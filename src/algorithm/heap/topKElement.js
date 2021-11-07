class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
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
      this.heap[index].value < this.heap[parentIndex].value
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
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
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
/**
 * 前 K 个高频元素
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 算法复杂度：O(nlogk)
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((m) => {
    map.set(m, map.has(m) ? map.get(m) + 1 : 1);
  });
  const minHeap = new MinHeap();
  map.forEach((value, key) => {
    minHeap.insert({ value, key });
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });
  return minHeap.heap.map((m) => m.key);
};
