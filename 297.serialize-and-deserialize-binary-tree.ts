/**
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * Encodes a tree to a single string.
 */

function serialize(root: TreeNode | null): string {
  if (!root) return 'null';
  
  const result: string[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(',');
}

/**
 * Decodes your encoded data to tree.
 */

function deserialize(data: string): TreeNode | null {
  const list = data.split(',');
  const buildTree = () => {
    const val = list.shift();
    if (val === 'null') return null;
    const node = new TreeNode(parseInt(val!));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
}