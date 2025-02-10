/**
 * https://leetcode.cn/problems/invert-binary-tree/description/
 *
 */

/**
 *  递归（DFS）
 * 	•	交换当前节点的左子树和右子树。
    •	递归处理左子树和右子树，继续翻转。
    •	终止条件：如果 root 为空，直接返回 null。
 */

function invertTreeDFS(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  [root.left, root.right] = [
    invertTreeDFS(root.right),
    invertTreeDFS(root.left),
  ];
  return root;
}

/**
 * 迭代（BFS - 层序遍历）
 * 	•	使用队列（Queue）进行广度优先搜索（BFS）：
 *  •	取出当前节点，交换其左右子树。
 *  •	如果左右子树不为空，将它们入队，继续处理。
 */

function invertTreeBFS(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let queue: TreeNode[] = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }
  return root;
}
