/**
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 */

/**
 *  BFS + 双端队列
    1.	使用队列进行层序遍历（BFS），但需要控制方向：
      •	奇数层（从左到右）：正常入队，按顺序存储。
      •	偶数层（从右到左）：在数组的头部插入（或者使用双端队列 Deque）。
    2.	使用队列存储当前层的节点，并在遍历完一层后改变方向。
    3.	利用 reverse 方法 或者双端队列 unshift() 方法来实现方向变换。
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if(!root) return []; // 如果根节点为空，直接返回空数组
  let queue = [root]; // 初始化队列，将根节点入队
  let res = []; // 初始化结果数组
  let isOrderLeft = true; // 初始化方向为从左到右
  while(queue.length) {
    let size = queue.length; // 当前层的节点数量
    let level = []; // 初始化当前层的结果数组
    while(size--) {
      let node = queue.shift(); // 取出队首节点
      if(isOrderLeft) {
        level.push(node.val); // 如果是从左到右，直接 push
      } else {
        level.unshift(node.val); // 如果是从右到左，使用 unshift
      }
    }
    res.push(level); // 将当前层的结果数组存入最终结果数组
    isOrderLeft = !isOrderLeft; // 改变方向
  }
  return res; // 返回最终结果数组
}