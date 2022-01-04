/**
 * 765. 情侣牵手
 * https://leetcode-cn.com/problems/couples-holding-hands/
 */

function minSwapsCouples(row) {
  const len = row.length;
  const n = len / 2;
  const uf = new UF(n);
  for (let i = 0; i < len; i += 2) {
    let left = Math.floor(row[i] / 2);
    let right = Math.floor(row[i + 1] / 2);
    // 如果 left 和 right 相同，即代表当前组的两人已经是一对情侣了，不需要跟任何人交换
    if (left === right) continue;
    // 否则，放到图里，去找对应的情侣，连接成环（环可能是多个）
    uf.union(left, right);
  }
  return n - uf.count;
}

// function minSwapsCouples(row) {
//   let len = row.length;
//   let union = new UF(len);
//   for (let i = 0; i < len; i += 2) {
//     union.union(i, i + 1);
//   }
//   for (let i = 0; i < len; i += 2) {
//     union.union(row[i], row[i + 1]);
//   }
//   return len / 2 - union.count;
// }

class UF {
  count = 0;
  size = [];
  parent = [];
  constructor(n) {
    this.count = n;
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  union(x, y) {
    const xr = this.find(x);
    const yr = this.find(y);
    if (xr === yr) return;
    // 小树接到大树下面，较平衡
    if (this.size[xr] < this.size[yr]) {
      this.parent[xr] = yr;
      this.size[yr] += this.size[xr];
    } else {
      this.parent[yr] = xr;
      this.size[xr] += this.size[yr];
    }
    this.count--;
  }

  isConnected = (x, y) => this.find(x) === this.find(y);

  find(x) {
    while (x !== this.parent[x]) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  count() {
    return this.count;
  }
}

const result = minSwapsCouples([1, 4, 0, 5, 8, 7, 6, 3, 2, 9]);
// [0,1, 2,3, 4,5, 6,7, 8,9]

// [1, 4, 0, 5, 8, 7, 6, 3, 2, 9]
// [3,2,0,1]
