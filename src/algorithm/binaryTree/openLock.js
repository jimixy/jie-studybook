/**
 * 打开转盘锁
 * https://leetcode-cn.com/problems/open-the-lock/
 */

function openLock(deadends, target) {
  const queue = ["0000"];
  const visited = ["0000"];
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
      if (deadends.includes(node)) {
        continue;
      }
      for (let j = 0; j < 4; j++) {
        const newNodeStr = plusNum(node, j);
        if (!visited.includes(newNodeStr)) {
          visited.push(newNodeStr);
          queue.push(newNodeStr);
        }
        const newNodeStr2 = minusNum(node, j);
        if (!visited.includes(newNodeStr2)) {
          visited.push(newNodeStr2);
          queue.push(newNodeStr2);
        }
      }
    }
    step++;
  }

  function plusNum(str, index) {
    const newNode = str.split("");
    if (newNode[index] === "9") {
      newNode[index] = "0";
    } else {
      newNode[index] = parseInt(newNode[index]) + 1;
    }
    return newNode.join("");
  }

  function minusNum(str, index) {
    const newNode = str.split("");
    if (newNode[index] === "0") {
      newNode[index] = "9";
    } else {
      newNode[index] = parseInt(newNode[index]) - 1;
    }
    return newNode.join("");
  }

  return -1;
}

const result = openLock(["0201", "0101", "0102", "1212", "2002"], "0202");
console.log(result);

// const result2 = openLock(
//   ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
//   "8888"
// );
// console.log(result2);
