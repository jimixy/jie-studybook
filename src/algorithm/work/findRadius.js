/**
 * 475. 供暖器
 * https://leetcode-cn.com/problems/heaters/
 */

function findRadius(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0, j = 0; i < houses.length; i++) {
    // 当前房屋和当前供暖器的距离
    let curDistance = Math.abs(houses[i] - heaters[j]);
    // 如果当前房屋和下一个供暖器的距离比当前房屋和当前供暖器的距离更近，则拿最小值
    while (
      j < heaters.length - 1 &&
      Math.abs(houses[i] - heaters[j + 1]) <= Math.abs(houses[i] - heaters[j])
    ) {
      j++;
      curDistance = Math.min(curDistance, Math.abs(houses[i] - heaters[j]));
    }
    res = Math.max(res, curDistance);
  }
  return res;
}
