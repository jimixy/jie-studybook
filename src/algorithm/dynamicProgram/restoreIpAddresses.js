/**
 * 复原 IP 地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 */

function restoreIpAddresses(s) {
  const res = [];
  const dfs = (start, temp) => {
    if (temp.length === 4) {
      if (start === s.length) {
        res.push(temp.join("."));
      }
      return;
    }
    // 每次取1-3个长度
    for (let i = 1; i <= 3; i++) {
      const str = s.substring(start, start + i);
      const len = str.length;
      if (len > 3) {
        break;
      }
      if (len > 1 && str[0] === "0") {
        break;
      }
      if (len > 2 && parseInt(str) > 255) {
        break;
      }
      temp.push(str);
      dfs(start + i, temp);
      temp.pop();
    }
  };
  dfs(0, []);
  return res;
}

// const res = restoreIpAddresses("101023");
// console.log(res);
