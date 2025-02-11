/**
 * https://leetcode.cn/problems/symmetric-tree/description/
 */


/**
    通过递归函数同时遍历左子树和右子树，比较以下情况：
      1.	两个节点都为空，返回 true。
      2.	一个节点为空，另一个不为空，返回 false。
      3.	两个节点的值不相等，返回 false。
      4.	递归比较左节点的左子树与右节点的右子树，以及左节点的右子树与右节点的左子树。
 */

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if(!left && !right) return true; // 两个节点都为空，返回 true
  if(!left || !right) return false; // 一个节点为空，另一个不为空，返回 false
  if(left.val !== right.val) return false; // 两个节点的值不相等，返回 false
  return isMirror(left.left, right.right) && isMirror(left.right, right.left); // 递归比较左节点的左子树与右节点的右子树，以及左节点的右子树与右节点的左子树
}

function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return true; // 如果根节点为空，直接返回 true
  return isMirror(root.left, root.right); // 递归比较左右子树
}