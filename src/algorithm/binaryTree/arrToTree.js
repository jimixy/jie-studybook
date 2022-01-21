/**
 * 数组转换成树结构
 */

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const generateTree = (arr, pid) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === pid) {
      const obj = {
        ...arr[i],
        children: generateTree(arr, arr[i].id),
      };
      result.push(obj);
    }
  }
  return result;
};

/* 解法二 */
const generateTree2 = (arr, firstPid) => {
  const result = [];
  const itemMap = {};
  for (const item of arr) {
    const id = item.id;
    const pid = item.pid;
    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };
    const treeItem = itemMap[id];
    if (pid === firstPid) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
};

const result = generateTree(arr, 0);
console.log(JSON.stringify(result));
