/**
 * 最小堆
 */
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
    if (this.heap[index] < this.heap[parentIndex]) {
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
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
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

// minHeap.insert(3);
// minHeap.insert(2);
// minHeap.insert(1);
// minHeap.pop();

/**
 * 数据流中的第 K 大元素
 * https: //leetcode-cn.com/problems/kth-largest-element-in-a-stream/
 */
function KthLargest(k, nums) {
  this.minHeap = new MinHeap();
  this.k = k;
  nums.forEach((m) => {
    this.minHeap.insert(m);
    if (this.minHeap.size() > k) {
      this.minHeap.pop();
    }
  });
}

KthLargest.prototype.add = function (val) {
  this.minHeap.insert(val);
  if (this.minHeap.size() > this.k) {
    this.minHeap.pop();
  }
  console.log(this.minHeap.peak());
  return this.minHeap.peak();
};

const kthLargest = new KthLargest(2, [0]);

kthLargest.add(-1); // return 4
kthLargest.add(1); // return 5
kthLargest.add(-2); // return 5
kthLargest.add(-4); // return 8
kthLargest.add(3); // return 8
