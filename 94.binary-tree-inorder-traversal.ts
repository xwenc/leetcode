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

/**
 * Performs an in-order traversal of a binary tree iteratively.
 *
 * @param root - The root node of the binary tree.
 * @returns An array of numbers representing the values of the nodes
 *          visited in in-order sequence.
 *
 * The function uses a stack to keep track of nodes. It traverses
 * the tree by first going to the leftmost node, then visiting the
 * node itself, and finally traversing the right subtree. This process
 * is repeated until all nodes are visited.
 *
 * Example usage:
 * ```typescript
 * const root = new TreeNode(1);
 * root.right = new TreeNode(2);
 * root.right.left = new TreeNode(3);
 * const result = inorderTraversalIteratively(root);
 * console.log(result); // Output: [1, 3, 2]
 * ```
 */
function inorderTraversalIteratively(root: TreeNode | null): number[] {
  let res: number[] = []; // Initialize the result array to store the in-order traversal
  let stack: TreeNode[] = []; // Initialize the stack to keep track of nodes
  let curr = root; // Start with the root node
  while(curr || stack.length) { // Continue while there are nodes to process
    while(curr) { // Traverse to the leftmost node
      stack.push(curr); // Push the current node to the stack
      curr = curr.left; // Move to the left child
    }
    curr = stack.pop()!; // Pop the node from the stack and process it
    res.push(curr.val); // Add the node's value to the result array
    curr = curr.right; // Move to the right child
  }
  return res; // Return the result array containing the in-order traversal
}