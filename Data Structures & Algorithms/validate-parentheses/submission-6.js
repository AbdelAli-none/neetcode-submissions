class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            "{": "}",
            "[": "]",
            "(": ")"
        };
        let stack = [];
        for(let char of s) {
            if(char in brackets) {
                stack.push(char);
            } else {
                if(stack.length === 0) return false;
                let lastItem = stack.pop();
                if(brackets[lastItem] !== char) return false;
            }
        }
        return stack.length ? false: true;
    }
}
