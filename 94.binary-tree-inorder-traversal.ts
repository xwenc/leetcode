/**
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 */

/**
 * 给定一棵二叉树，要求返回 中序遍历（左 - 根 - 右）的结果。
 */

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  function inOrder(node:TreeNode | null) {
    if(!node) return;
    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  };
  inOrder(root);
  return res;
}