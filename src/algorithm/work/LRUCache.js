/**
 * 试题 16.25. LRU 缓存
 * https://leetcode-cn.com/problems/lru-cache-lcci/
 */

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * 采用双向链表+哈希表实现
 * 查找、插入、删除、移动：O(1)
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    // 将头节点和尾节点连接起来
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    const node = this.hash[key];
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
  }

  moveToHead(node) {
    // 先将节点从链表中删除
    this.removeFromList(node);
    // 再添加到链表的头部
    this.addToHead(node);
  }

  removeFromList(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node) {
    // 先将node节点连接到头节点的后面
    // 再将头节点的后面节点连接到node节点
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }

  put(key, value) {
    const node = this.hash[key];
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new ListNode(key, value);
      this.hash[key] = newNode;
      this.addToHead(newNode);
      this.count++;
      if (this.count > this.capacity) {
        // 删除尾节点
        const tail = this.dummyTail.prev;
        this.removeFromList(tail);
        delete this.hash[tail.key];
        this.count--;
      }
    }
  }
}
