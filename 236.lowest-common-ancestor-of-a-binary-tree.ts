/**
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
 */

/**
 * 
可以使用 递归 DFS（深度优先搜索） 来遍历二叉树。

  算法逻辑
    1.	递归终止条件
    •	如果当前 root 为空，返回 null（说明没有找到 p 或 q）。
    •	如果当前 root 等于 p 或 q，说明找到了 p 或 q，直接返回 root。
    2.	递归搜索左右子树
    •	left = dfs(root.left, p, q): 在左子树中查找 p 或 q。
    •	right = dfs(root.right, p, q): 在右子树中查找 p 或 q。
    3.	返回 LCA
    •	如果 left 和 right 都不为空，说明 p 和 q 分别在 root 的两侧，root 就是最近公共祖先。
    •	如果 left 不为空，说明 p 和 q 都在左子树，返回 left。
    •	如果 right 不为空，说明 p 和 q 都在右子树，返回 right。
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
}