/**
 * https://leetcode.cn/problems/min-stack/description/
 */

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    const min = this.getMin();
    if (min >= val || this.minStack.length === 0) {
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  pop(): void {
    const top = this.top();
    const min = this.getMin();
    if (top === min) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
