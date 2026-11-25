class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = ["+", "-", "*", "/"];
        let stack = [];
        for(let token of tokens) {
            if(operands.includes(token)) {
                let newest = Number(stack.pop()); // 2
                let oldest = Number(stack.pop()); // 1
                let res = 0;
                if(token === "+") res = oldest + newest;
                if(token === "-") res = oldest - newest;
                if(token === "*") res = oldest * newest;
                if(token === "/") res = Math.trunc(oldest / newest);
                stack.push(res)
            } else {
                stack.push(token);
            }
        }
        return stack.pop()
    }
}
