/**
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 */

/**
 * 递归
 * 递归方法的核心是：
	•	如果 list1 为空，直接返回 list2
	•	如果 list2 为空，直接返回 list1
	•	比较 list1.val 和 list2.val：
	•	如果 list1.val < list2.val，则 list1.next 继续与 list2 递归合并。
	•	否则，list2.next 继续与 list1 递归合并。
 */

  function mergeTwoListsRA(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    if(list1.val < list2.val) {
      list1.next = mergeTwoListsRA(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoListsRA(list1, list2.next);
      return list2;
    }
  }

  /**
   *  我们使用 虚拟头节点 (dummy) 来简化链表操作：
      1.	创建 dummy 作为新链表的起点，同时 cur 指针用于拼接节点。
      2.	比较 list1 和 list2 当前节点的值：
      •	较小者加入 cur.next，并移动相应链表的指针。
      •	cur 指针也向后移动。
      3.	当一个链表遍历完，直接拼接另一个链表的剩余部分。
      4.	返回 dummy.next 即为新链表的头节点。
   */

  function mergeTwoListsTRA(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(-1);
    let cur = dummy;
    while(list1 && list2) {
      if(list1.val < list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }
      cur = cur.next;
    }
    cur.next = list1 || list2;
    return dummy.next;
  }