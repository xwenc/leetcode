/**
https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
https://www.youtube.com/watch?v=27Q0nMM6vg0
1. 使用虚拟头节点（dummy head）
  • 由于头节点可能会被删除，我们创建一个虚拟头节点 dummy，指向 head，这样即使 head 需要删除，也不会影响链表的操作。
2. 使用前驱指针 prev
  • prev 指向最终链表的前一个节点，确保唯一元素可以正确连接。
3. 遍历链表，检查当前节点是否有重复
  • 如果当前节点的值 cur.val 与下一个节点相等：
  • 继续遍历，直到找到不同的值，prev.next = cur.next，跳过这些重复的节点。
  • 如果当前节点值不重复，直接 prev = cur，让 prev 向前移动。
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null; // 如果链表为空，直接返回 null
    const dummy: ListNode = new ListNode(0, head); // 创建虚拟头节点，指向 head
    let prev: ListNode = dummy; // 前驱指针初始化为虚拟头节点

    while (head && head.next) { // 遍历链表，直到链表结束
        if (head.val === head.next.val) { // 如果当前节点值与下一个节点值相等
            while (head.next && head.val === head.next.val) { // 继续遍历，直到找到不同的值
                head = head.next; // 移动到下一个节点
            }
            prev.next = head.next; // 跳过这些重复的节点
        } else {
            prev = prev.next!; // 如果当前节点值不重复，前驱指针移动到当前节点
        }
        head = head.next; // 继续遍历下一个节点
    }

    return dummy.next; // 返回去除重复节点后的链表头节点
};