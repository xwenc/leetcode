/**
 * https://leetcode.cn/problems/validate-stack-sequences/submissions/599125460/
 * 	1.	按照 pushed 依次入栈
    2.	尽可能匹配 popped 进行出栈
    3.	最终栈是否为空，决定是否是合法出栈顺序
 */


    function validateStackSequences(pushed: number[], popped: number[]): boolean {
      let stack: number[] = [];
      let i = 0;
      for(let num of pushed) {
        stack.push(num);
        while(stack.length && stack[stack.length - 1] === popped[i]) {
          stack.pop();
          i++;
        }
      }
      return stack.length === 0;
    }