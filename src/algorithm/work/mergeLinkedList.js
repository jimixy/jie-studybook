let input1 = [1, 2, 3];
let input2 = [2, 3, 4];
//console.log(input1, input2);
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function generateList(array) {
  let fakeHead = new ListNode(0);
  let current = fakeHead;
  for (let index = 0; index < array.length; index++) {
    current.next = { val: array[index], next: null };
    current = current.next;
  }
  return fakeHead.next;
}
function generateArray(list) {
  let res = [];
  while (list) {
    res.push(list.val);
    list = list.next;
  }
  return res;
}
const m1 = generateList(input1);
const m2 = generateList(input2);

const a1 = generateArray(m1);
console.log(JSON.stringify(m1), JSON.stringify(m2), a1);

function mergeList(list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let l3 = new ListNode(-1);
  let prev = l3;
  while (l1 && l2) {
    const a1 = Number(l1.val);
    console.log(JSON.stringify(l1), JSON.stringify(l2), a1);
    if (Number(l1.val) > Number(l2.val)) {
      prev.next = l2;
      l2 = l2.next;
    } else {
      prev.next = l1;
      l1 = l1.next;
    }
    prev = prev.next;
  }
  prev.next = l1 == null ? l2 : l1;
  console.log(JSON.stringify(l3));
}
mergeList(m1, m2);
