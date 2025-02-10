/**
 * Definition for a binary tree node.
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * 解法 1：递归（深度优先搜索 - DFS）
 * 我们可以使用递归的方法，每次递归计算左右子树的最大深度，然后取较大值加 1 即可。
 */

function maxDepthDFS(root: TreeNode | null): number {
  if(!root) return 0;
  return Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right)) + 1;
};


/**
 * 解法 2：迭代（广度优先搜索 - BFS）
 * 使用队列进行层序遍历，每遍历一层，深度 +1。
 */
function maxDepthBFS(root: TreeNode | null): number {
  if(!root) return 0; // 如果根节点为空，直接返回深度 0
  let queue = [root]; // 初始化队列，将根节点入队
  let depth = 0; // 初始化深度为 0
  while(queue.length) { // 当队列不为空时，进行层序遍历
    let size = queue.length; // 当前层的节点数量
    while(size--) { // 遍历当前层的所有节点
      let node = queue.shift(); // 取出队首节点
      if(node.left) queue.push(node.left); // 如果左子节点不为空，将其入队
      if(node.right) queue.push(node.right); // 如果右子节点不为空，将其入队
    }
    depth++; // 每遍历一层，深度加 1
  }
  return depth; // 返回最大深度
}