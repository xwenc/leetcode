/**
 * https://leetcode.cn/problems/clone-graph/description/
 */

/**
 * 克隆给定起始节点的图。
 * 
 * 该函数使用广度优先搜索（BFS）对图进行深度复制。
 * 它使用队列来遍历图，并使用映射来跟踪已访问的节点及其对应的克隆节点。
 * 
 * @param { _Node | null } node - 要克隆的图的起始节点。
 * @returns { _Node | null } - 克隆图的起始节点，如果输入节点为 null，则返回 null。
 */
function cloneGraphBFS(node: _Node | null): _Node | null {
  if (!node) return null;
  const visited = new Map();
  const queue = [node];
  visited.set(node, new _Node(node.val, []));
  while (queue.length) {
    const n = queue.shift();
    (n.neighbors || []).forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new _Node(neighbor.val, []));
        queue.push(neighbor);
      }
      visited.get(n).neighbors.push(visited.get(neighbor));
    });
  }
  return visited.get(node);
}



/**
 * 使用深度优先搜索（DFS）算法克隆图。
 * 
 * 该函数接受一个图的节点，并返回整个图的深度复制。
 * 它使用DFS方法遍历图，并使用Map来跟踪已访问的节点，
 * 以避免无限循环并确保每个节点只被克隆一次。
 * 
 * @param node - 要克隆的图的起始节点。它可以为null。
 * @returns 从给定节点开始的图的深度复制，如果输入节点为null，则返回null。
 */
function cloneGraphDFS(node: _Node | null): _Node | null {
  if (!node) return null;
  const visited = new Map();
  const dfs = (n: _Node) => {
    if (!visited.has(n)) {
      visited.set(n, new _Node(n.val, []));
      (n.neighbors || []).forEach(neighbor => {
        visited.get(n).neighbors.push(dfs(neighbor));
      });
    }
    return visited.get(n);
  };
  return dfs(node);
}

function bfs(graph: Map<number, number[]>, start: number): number[] {
  const queue: number[] = [start];  // 维护待访问的队列
  const visited = new Set<number>(); // 记录已访问节点
  const result: number[] = [];

  while (queue.length) {
      const node = queue.shift()!;
      if (visited.has(node)) continue;

      visited.add(node);
      result.push(node);

      for (const neighbor of graph.get(node) || []) {
          queue.push(neighbor);
      }
  }
  return result;
}

function dfs(graph: Map<number, number[]>, node: number, visited = new Set<number>()): number[] {
  if (visited.has(node)) return [];
  
  visited.add(node);
  const result = [node];

  for (const neighbor of graph.get(node) || []) {
      result.push(...dfs(graph, neighbor, visited)); // 递归访问邻居
  }
  
  return result;
}
