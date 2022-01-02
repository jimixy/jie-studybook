/**
 * 684. 冗余连接
 * https://leetcode-cn.com/problems/redundant-connection/
 */

function findRedundantConnection(edges) {
  const uf = new UF(edges.length);
  let res = null;
  for (let [m, n] of edges) {
    if (uf.isConnected(m, n)) {
      res = [m, n];
    } else {
      uf.union(m, n);
    }
  }
  return res;
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
