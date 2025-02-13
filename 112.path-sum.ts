/**
 * https://leetcode.cn/problems/path-sum/description/
 */

//递归 DFS

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false; // 如果根节点为空，直接返回 false
  if(!root.left && !root.right) return targetSum === root.val; // 如果是叶子节点，判断当前节点值是否等于目标值
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val); // 递归判断左右子树
}

//迭代 BFS Stack
function hasPathSumStack(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false; // 如果根节点为空，直接返回 false
  let stack: [TreeNode, number][] = [[root, targetSum - root.val]]; // 初始化栈，将根节点入栈
  while(stack.length) {
    const [node, num]:[TreeNode, number] = stack.pop(); // 取出栈顶节点
    if(!node.left && !node.right && num === 0) return true; // 如果是叶子节点，判断当前节点值是否等于目标值
    if(node.right) stack.push([node.right, num - node.right.val]); // 如果右子节点不为空，将其入栈
    if(node.left) stack.push([node.left, num - node.left.val]); // 如果左子节点不为空，将其入栈
  }
  return false; // 如果遍历完整个树都没有找到目标值，返回 false
}

//迭代 BFS Queue
function hasPathSumQueue(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false; // 如果根节点为空，直接返回 false
  let queue: [TreeNode, number][] = [[root, targetSum - root.val]]; // 初始化队列，将根节点入队
  while(queue.length) {
    const [node, num]:[TreeNode, number] = queue.shift(); // 取出队首节点
    if(!node.left && !node.right && num === 0) return true; // 如果是叶子节点，判断当前节点值是否等于目标值
    if(node.left) queue.push([node.left, num - node.left.val]); // 如果左子节点不为空，将其入队
    if(node.right) queue.push([node.right, num - node.right.val]); // 如果右子节点不为空，将其入队
  }
  return false; // 如果遍历完整个树都没有找到目标值，返回 false
}