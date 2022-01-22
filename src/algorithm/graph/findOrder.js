/**
 * 210. 课程表 II
 * https://leetcode-cn.com/problems/course-schedule-ii/
 */

function findOrder(numCourses, prerequisites) {
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
  const ans = [];
  // 出队
  while (queue.length) {
    const i = queue.shift();
    ans.push(i);
    for (let j of lower[i]) {
      degs[j]--;
      if (degs[j] === 0) queue.push(j);
    }
  }
  return ans.length === numCourses ? ans : [];
}

/** 解法二 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const buildGraph = (numCourses, prerequisites) => {
    let graph = new Array(numCourses).fill(0).map(() => new Array());
    for (let edge of prerequisites) {
      let from = edge[1],
        to = edge[0];
      // 修完课程from才能修课程to  在图中添加一条从from指向to的有向边
      graph[from].push(to);
    }
    return graph;
  };
  // 记录后序遍历结果
  let res = [];
  // 记录是否存在环
  let hasCycle = false;
  let visited = new Array(numCourses).fill(false);
  let onPath = visited.slice();
  let graph = buildGraph(numCourses, prerequisites);
  const traverse = (graph, s) => {
    if (onPath[s]) hasCycle = true;
    if (visited[s] || hasCycle) return;
    visited[s] = true;
    onPath[s] = true;
    for (let t of graph[s]) {
      traverse(graph, t);
    }
    onPath[s] = false;
    res.push(s);
  };
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i);
  }
  // 有环图无法进行拓扑排序
  if (hasCycle) {
    return [];
  }
  // 计算后序遍历的逆序，逆序遍历结果即为拓扑排序结果
  return res.reverse();
}
