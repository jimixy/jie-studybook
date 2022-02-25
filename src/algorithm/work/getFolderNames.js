/**
 * 保证文件名唯一
 * https://leetcode-cn.com/problems/making-file-names-unique/
 */

function getFolderNames(names) {
  const map = {};
  const res = names.map((name) => {
    if (map[name]) {
      let value = map[name];
      let originName = name;
      while (map[name]) {
        name = `${originName}(${value})`;
        ++value;
      }
    }
    map[name] = 1;
    return name;
  });
  return res;
}
