/**
 * 207. 课程表
 * https://leetcode-cn.com/problems/course-schedule/
 */

function canFinish(numCourses, prerequisites) {
  const buildGraph = (numCourses, prerequisites) => {
    let graph = new Array(numCourses).fill(0).map(() => []);
    for (let edge of prerequisites) {
      let from = edge[1],
        to = edge[0];
      graph[from].push(to);
    }
    return graph;
  };
  let hasCycle = false;
  let graph = buildGraph(numCourses, prerequisites);
  let visited = new Array(numCourses).fill(false);
  let onPath = visited.slice();
  const traverse = (graph, s) => {
    if (onPath[s]) hasCycle = true;
    if (visited[s] || hasCycle) return;
    visited[s] = true;
    onPath[s] = true;
    for (let t of graph[s]) {
      traverse(graph, t);
    }
    onPath[s] = false;
  };
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i);
  }
  return !hasCycle;
}

const res = canFinish(2, [
  [1, 0],
  // [0, 1],
]);
console.log(res);

/** 解法二 */
function canFinish(numCourses, prerequisites = []) {
  // 存储 入度
  const degs = Array(numCourses).fill(0);
  const lower = Array(numCourses)
    .fill(null)
    .map(() => []);
  for (const [a, b] of prerequisites) {
    degs[a]++;
    lower[b].push(a);
  }
  const queue = [];
  // 找到入度为 0 的入队
  for (let i = 0; i < numCourses; i++) {
    if (degs[i] === 0) queue.push(i);
  }
  let ans = 0;
  // 出队
  while (queue.length) {
    const i = queue.shift();
    ans++;
    for (let j of lower[i]) {
      degs[j]--;
      if (degs[j] === 0) queue.push(j);
    }
  }
  return numCourses === ans;
}
