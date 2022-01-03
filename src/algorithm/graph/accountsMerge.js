/**
 * 721. 账户合并
 * https://leetcode-cn.com/problems/accounts-merge/
 */

function accountsMerge(accounts) {
  const emailToIdx = {};
  const n = accounts.length;
  const uf = new UF(n);
  for (let i = 0; i < n; i++) {
    const emails = accounts[i];
    for (let j = 1; j < emails.length; j++) {
      if (emailToIdx[emails[j]] == undefined) {
        emailToIdx[emails[j]] = i;
      } else {
        // 邮箱已经出现过，那么代表这两个用户是同一个
        uf.union(i, emailToIdx[emails[j]]);
      }
    }
  }
  const res = [];
  for (let i = 0; i < n; i++) {
    const parentIdx = uf.find(i);
    // 如果这个用户的父节点是自己，那么就是一个独立的用户
    if (!res[parentIdx]) {
      const [name, ...emails] = accounts[i];
      const arr = [...new Set(emails)].sort();
      res[parentIdx] = [name, ...arr];
    } else {
      // 如果这个用户的父节点不是自己，那么就是一个合并的用户
      const [name, ...oldEmails] = res[parentIdx];
      const [, ...newEmails] = accounts[i];
      const arr = [...new Set([...oldEmails, ...newEmails])].sort();
      res[parentIdx] = [name, ...arr];
    }
  }
  return res.filter(Boolean);
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

const result = accountsMerge([
  [
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
    ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
    ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
    ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
    ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
  ],
]);
console.log(result);
