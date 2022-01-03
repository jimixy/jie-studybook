/**
 * 1202. 交换字符串中的元素
 * https://leetcode-cn.com/problems/smallest-string-with-swaps/
 */

function smallestStringWithSwaps(s, pairs) {
  const uf = new UF(s.length);
  for (let [a, b] of pairs) {
    uf.union(a, b);
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const root = uf.find(i);
    if (!map[root]) {
      map[root] = [];
    }
    map[root].push(s[i]);
  }
  // 分组排序
  for (const k in map) {
    map[k].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  }
  const res = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    const parent = uf.find(i);
    const strings = map[parent];
    res[i] = strings.pop();
  }
  return res.join("");
}

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

const result = smallestStringWithSwaps("abcdef", [
  [0, 3],
  [1, 2],
  [0, 2],
]);
