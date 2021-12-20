/**
 * 前K个高频单词
 * https://leetcode-cn.com/problems/top-k-frequent-words/
 */

function topKFrequent(words, k) {
  const map = {};
  words.forEach((v) => (map[v] = (map[v] || 0) + 1));
  const keys = Object.keys(map).sort(
    (a, b) => map[b] - map[a] || a.localeCompare(b)
  );
  return keys.slice(0, k);
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

// TODO 有bug
// function topKFrequent(words, k) {
//   const map = new Map();
//   for (const word of words) {
//     map.set(word, (map.get(word) || 0) + 1);
//   }
//   const minHeap = new MinHeap(k, (a, b) => {
//     return a[1] !== b[1] ? a[1] - b[1] : b[0].localeCompare(a[0]);
//   });
//   console.log(10, map);
//   for (const entry of map.entries()) {
//     console.log(entry);
//     minHeap.insert(entry);
//   }
//   console.log(66, minHeap.heap);
//   return minHeap.heap.map(([word]) => word).reverse();
// }

class MinHeap {
  constructor(maxSize, compare) {
    this.heap = [];
    this.maxSize = maxSize;
    this.compare = compare;
  }
  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
    const size = this.size();
    if (size > this.maxSize) {
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

// const result = topKFrequent(
//   ["i", "love", "leetcode", "i", "love", "coding"],
//   2
// );

// const result = topKFrequent(["a", "aa", "aaa"], 1);

const result = topKFrequent(
  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  4
);

// const result = topKFrequent(
//   ["i", "love", "leetcode", "i", "love", "coding"],
//   3
// );

console.log(result);
