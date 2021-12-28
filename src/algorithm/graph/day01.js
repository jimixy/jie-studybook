const graph = {
  0: [4, 3, 1],
  1: [3, 2, 4],
  2: [3],
  3: [4],
  4: [],
};

const visited = {};
const dfs = (n) => {
  if (n in visited) {
    return;
  }
  visited[n] = true;
  console.log(n);
  for (let next of graph[n]) {
    dfs(next);
  }
};

dfs(1);

const bfs = (n) => {
  const queue = [n];
  while (queue.length) {
    const node = queue.shift();
    if (node in visited) {
      continue;
    }
    visited[node] = true;
    console.log(node);
    for (let next of graph[node]) {
      queue.push(next);
    }
  }
};
// bfs(1);
