var getLeastNumbers = function (arr, k) {
  const maxHead = new MaxHeap(k);
  arr.forEach((j) => {
    maxHead.insert(j);
  });
  return maxHead.heap;
};

class MaxHeap {
  constructor(maxSize) {
    this.heap = [];
    this.maxSize = maxSize;
  }
  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
    const size = this.size();
    if (size > this.maxSize) {
      if (size === 1) {
        this.heap.pop();
      } else {
        this.pop();
      }
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
    if (this.heap[index] > this.heap[parentIndex]) {
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
    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }
    if (this.heap[rightIndex] > this.heap[index]) {
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

const result = getLeastNumbers([0, 0, 0, 2, 0, 5], 0);
