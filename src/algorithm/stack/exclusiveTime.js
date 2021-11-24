/**
 * 函数的独占时间
 * https://leetcode-cn.com/problems/exclusive-time-of-functions/
 */

function exclusiveTime(n, logs) {
  let ans = new Array(n).fill(0);
  let stack = []; // 记录任务id的栈
  let pre = 0; // 记录前一个时长
  for (let i = 0; i < logs.length; i++) {
    const element = logs[i];
    const pos = element.split(":");
    let [id, status, time] = pos;
    time = Number(time);
    if (status === "start") {
      // 任务开始
      if (stack.length) {
        ans[stack[stack.length - 1]] += time - pre; // 将栈顶编号的时间段记录
      }
      pre = time;
      stack.push(id);
    } else {
      // 任务结束
      ans[id] += time - pre + 1; // 如果是任务结束应该把当前id的起始时间区间 + 现在结束到pre之前的时间区间
      pre = time + 1; // 因为pre计算时 + 1 ，所以这里也要 + 1 下次循环计算时才是正确的值，否则就会出现（time = 6, pre = 5,time - pre + 1 = 2）而实际结果应该是 6 - 5 = 1 -> 6 - 6 + 1 = 1
      stack.pop(); // 处理完一个任务，当前任务出栈即可
    }
  }
  return ans; // 返回结果数组即可
}

const result = exclusiveTime(1, [
  "0:start:0",
  "0:start:2",
  "0:end:5",
  "0:start:6",
  "0:end:6",
  "0:end:7",
]);

// const result = exclusiveTime(2, [
//   "0:start:0",
//   "1:start:2",
//   "1:end:5",
//   "0:end:6",
// ]);

console.log(result);
