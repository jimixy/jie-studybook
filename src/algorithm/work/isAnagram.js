/**
 * 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 */
const isAnagram = function (s, t) {
  const len = s.length;
  const len2 = t.length;
  if (len !== len2) {
    return false;
  }
  var obj = {};
  var obj2 = {};
  for (let i = 0; i < len; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < len2; i++) {
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (let k in obj) {
    if (obj[k] !== obj2[k]) return false;
  }
  console.log(obj, obj2);
  return true;
};

isAnagram("anagram", "nagaram");
