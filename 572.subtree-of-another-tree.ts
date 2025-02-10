/**
 * https://leetcode.cn/problems/subtree-of-another-tree/
 */

/**
 * 解法 1：递归 + 判断子树

  思路
    1.	遍历 root，对于每个节点，判断 subRoot 是否和当前节点的子树完全相同。
    2.	判断两棵树是否相同：
    •	根节点值相同。
    •	左子树相同。
    •	右子树相同。
    3.	递归检查 root.left 和 root.right 是否包含 subRoot。
 */

function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
  if(!s && !t) return true;
  if (!s || !t) return false;
  if(s.val !== t.val) return false;
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};