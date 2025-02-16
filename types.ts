class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

class RandomNode {
  val: number
  next: RandomNode | null
  random: RandomNode | null
  constructor(val?: number, next?: RandomNode | null, random?: RandomNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
  }
}

export { ListNode, TreeNode, _Node, RandomNode };