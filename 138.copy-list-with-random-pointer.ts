/**
 * https://leetcode.cn/problems/copy-list-with-random-pointer/description/
 */


/**
 * 	1.	遍历原链表，用 Map 记录 旧节点 → 新节点 的映射关系。
	  2.	再次遍历，通过 Map 复制 next 和 random 指针。
 */

import { RandomNode } from './types';

function copyRandomList(head: RandomNode | null): RandomNode | null {
  if (!head) return null;
  let map = new Map< RandomNode | null,  RandomNode | null>();
  let node = head;
  while (node) {
    map.set(node, new RandomNode(node.val));
    node = node.next;
  }
  node = head;
  while (node) {
    map.get(node)!.next = map.get(node.next) || null;
    map.get(node)!.random = map.get(node.random) || null;
    node = node.next;
  }
  return map.get(head) || null;
}