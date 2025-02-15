/**
 * https://leetcode.cn/problems/path-sum-ii/description/
 */

/**
 * 我们可以使用 深度优先搜索（DFS）+ 回溯 来解决这个问题：
    1.	递归遍历 二叉树，维护当前路径 path 和路径上的数值总和 sum。
    2.	到达叶子节点 时，检查 sum 是否等于 targetSum，如果相等，则将 path 加入结果集中。
    3.	回溯：在递归返回时，需要将 path 恢复成进入递归前的状态，以便正确遍历其他路径。
 */
import { TreeNode } from './types';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let res: number[][] = [];
  function dfs(node: TreeNode | null, sum: number, path: number[]) {
    if (!node) return;
    path.push(node.val);
    sum += node.val;
    if(!node.left && !node.right && sum === targetSum) {
      res.push([...path]);
    } else {
      dfs(node.left,sum, path);
      dfs(node.right,sum, path);
    }
    path.pop(); // 回溯
  }
  dfs(root, 0, []);
  return res;
}

// Test
const tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.left = new TreeNode(5);
tree.right.right.right = new TreeNode(1);
console.log(pathSum(tree, 22)); // [[5,4,11,2],[5,8,4,5]]
