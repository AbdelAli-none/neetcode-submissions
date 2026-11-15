class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const operands = ["+", "-", "*", "/"];

        for (let t of tokens) {
            if (!operands.includes(t)) {
                stack.push(t);
            } else {
                let newest = Number(stack.pop());
                let old = Number(stack.pop());
                let res;
                if (t === "+") res = old + newest;
                if (t === "*") res = old * newest;
                if (t === "/") res = Math.trunc(old / newest);
                if (t === "-") res = old - newest;
                stack.push(res);
            }
        }
        return stack.pop();
    }
}
