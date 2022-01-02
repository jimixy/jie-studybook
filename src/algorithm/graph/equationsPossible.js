/**
 * 990. 等式方程的可满足性
 * https://leetcode-cn.com/problems/satisfiability-of-equality-equations/
 */

function equationsPossible(equations) {
  const uf = new UF(26);
  const codeA = "a".charCodeAt(0);
  for (let i = 0; i < equations.length; i++) {
    const item = equations[i];
    if (item[1] === "=") {
      uf.union(item[0].charCodeAt(0) - codeA, item[3].charCodeAt(0) - codeA);
    }
  }
  for (let i = 0; i < equations.length; i++) {
    const item = equations[i];
    if (item[1] === "!") {
      if (
        uf.isConnected(
          item[0].charCodeAt(0) - codeA,
          item[3].charCodeAt(0) - codeA
        )
      ) {
        return false;
      }
    }
  }
  return true;
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
