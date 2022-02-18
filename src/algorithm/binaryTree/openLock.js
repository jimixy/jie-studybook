/**
 * 打开转盘锁
 * https://leetcode-cn.com/problems/open-the-lock/
 */

function openLock(deadends, target) {
  const queue = ["0000"];
  const visited = new Set(["0000"]);
  // 使用set来优化性能
  const deadSet = new Set(deadends);
  let step = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 没有子节点
      if (node === target) {
        return step;
      }
      // 死亡数字
      if (deadSet.has(node)) {
        continue;
      }
      for (let j = 0; j < 4; j++) {
        const num = Number(node[j]);
        const up = (num + 1) % 10;
        const upStr = node.substring(0, j) + up + node.substring(j + 1);
        if (!visited.has(upStr)) {
          visited.add(upStr);
          queue.push(upStr);
        }
        const down = (num + 9) % 10;
        const downStr = node.substring(0, j) + down + node.substring(j + 1);
        if (!visited.has(downStr)) {
          visited.add(downStr);
          queue.push(downStr);
        }
      }
    }
    step++;
  }
  return -1;
}
