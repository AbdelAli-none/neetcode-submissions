class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = ["-", "+", "*", "/"];
        let stack = [];

        for(let char of tokens) {
            if(!operands.includes(char)) {
                stack.push(char);
            } else {
                let newestItem = Number(stack.pop()); 
                let olderItem = Number(stack.pop()); 
                let res;
                if(char === "-") res = olderItem - newestItem;
                if(char === "+") res = olderItem + newestItem; 
                if(char === "*") res = olderItem * newestItem; 
                if(char === "/") res = Math.trunc(olderItem / newestItem);
                stack.push(res); 
            }
        }
        return stack.pop();
    }
}
