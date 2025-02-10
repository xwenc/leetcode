/**
 * Definition for a binary tree node.
 */

/**
 *  递归（DFS - 深度优先搜索）
    •	如果 root 为空，返回 0。
    •	如果某个子树为空，则最小深度取非空子树的深度 +1。
    •	如果左右子树都不为空，返回左右子树最小深度 +1。
 */

function minDepthDFS(root: TreeNode | null): number {
  if(root === null) return 0;
  if(!root.left) return minDepthDFS(root.right) + 1;
  if(!root.right) return minDepthDFS(root.left) + 1;
  return Math.min(minDepthDFS(root.left), minDepthDFS(root.right)) + 1;
};