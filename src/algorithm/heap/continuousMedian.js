/**
 * 连续中值
 * https://leetcode-cn.com/problems/continuous-median-lcci/
 */

function MedianFinder() {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
  this.size = 0;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapify(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);
    return min;
  }

  heapify(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let min = index;
    if (left < this.heap.length && this.heap[left] < this.heap[min]) {
      min = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[min]) {
      min = right;
    }
    if (min !== index) {
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      this.heapify(min);
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapify(this.heap.length - 1);
  }

  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);
    return max;
  }

  heapify(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let max = index;
    if (left < this.heap.length && this.heap[left] > this.heap[max]) {
      max = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[max]) {
      max = right;
    }
    if (max !== index) {
      [this.heap[max], this.heap[index]] = [this.heap[index], this.heap[max]];
      this.heapify(max);
    }
  }
}

MedianFinder.prototype.addNum = function (num) {
  this.size++;
  if (this.size === 1) {
    this.minHeap.insert(num);
    return;
  }
  if (num <= this.minHeap.heap[0]) {
    this.minHeap.insert(num);
  } else {
    this.maxHeap.insert(num);
  }
  if (this.minHeap.heap.length - this.maxHeap.heap.length > 1) {
    this.maxHeap.insert(this.minHeap.extractMin());
  } else if (this.maxHeap.heap.length - this.minHeap.heap.length > 1) {
    this.minHeap.insert(this.maxHeap.extractMax());
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.size % 2 === 0) {
    return (this.minHeap.heap[0] + this.maxHeap.heap[0]) / 2;
  }
  return this.minHeap.heap[0];
};
