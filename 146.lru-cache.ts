/* 
https://leetcode.cn/problems/lru-cache/description/

1.	哈希表（Map）：存储 key -> 对应的双向链表节点，方便 O(1) 访问。
2.	双向链表（Doubly Linked List）：
•	维护数据的访问顺序，最近使用的节点放在 链表头部，最久未使用的放在 链表尾部。
  •	get(key)：若 key 存在，则把该节点移到 链表头部。
  •	put(key, value)：
    •	若 key 存在，更新值，并将节点移动到 链表头部。
    •	若 key 不存在：
    •	如果容量未满，直接插入 链表头部。
    •	如果容量已满，删除 链表尾部（最久未使用的节点），然后插入 链表头部。
*/

class DListNode {
  key: number;
  value: number;
  prev: DListNode | null;
  next: DListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, DListNode>;
  private head: DListNode;
  private tail: DListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    // 创建伪头部和伪尾部
    this.head = new DListNode(0, 0);
    this.tail = new DListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    // 获取节点并移动到头部
    const node = this.cache.get(key)!;
    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // 更新值并移动到头部
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
    } else {
      // 创建新节点
      const newNode = new DListNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);

      if (this.cache.size > this.capacity) {
        // 移除尾部的节点（最久未使用）
        const tail = this.removeTail();
        this.cache.delete(tail.key);
      }
    }
  }

  private addToHead(node: DListNode): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: DListNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private moveToHead(node: DListNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  private removeTail(): DListNode {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 返回 1
lru.put(3, 3); // 淘汰 key=2
console.log(lru.get(2)); // 返回 -1
lru.put(4, 4); // 淘汰 key=1
console.log(lru.get(1)); // 返回 -1
console.log(lru.get(3)); // 返回 3
console.log(lru.get(4)); // 返回 4
