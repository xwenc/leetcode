/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 */

/**
 *  这道题适合使用 BFS（广度优先搜索）+ 队列（Queue） 来实现：
 * 	1.	使用队列 存储当前层的所有节点，按照先进先出的顺序依次处理。
    2.	逐层遍历：每次处理一整层的节点，并将它们的值存入结果数组。
    3.	加入子节点：处理完当前层的所有节点后，将它们的左右子节点加入队列，准备处理下一层。
    4.	循环执行 直到队列为空。
 */

function levelOrder(root: TreeNode | null): number[][] {
  if(!root) return []; // 如果根节点为空，直接返回空数组
  let queue = [root]; // 初始化队列，将根节点入队
  let res = []; // 初始化结果数组
  while(queue.length) {
    let size = queue.length; // 当前层的节点数量
    let level = []; // 初始化当前层的结果数组
    while(size--) {
      let node = queue.shift(); // 取出队首节点
      level.push(node.val); // 将节点值存入当前层的结果数组
      if(node.left) queue.push(node.left); // 如果左子节点不为空，将其入队
      if(node.right) queue.push(node.right); // 如果右子节点不为空，将其入队
    }
    res.push(level); // 将当前层的结果数组存入最终结果数组
  }
  return res; // 返回最终结果数组
}