/**
 * 最小堆
 */
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

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHead = new MinHeap(k);
  nums.forEach((m) => {
    this.minHead.insert(m);
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHead.insert(val);
  return this.minHead.peak();
};

const kthLargest = new KthLargest(2, [0]);

kthLargest.add(-1); // return 4
kthLargest.add(1); // return 5
kthLargest.add(-2); // return 5
kthLargest.add(-4); // return 8
kthLargest.add(3); // return 8
