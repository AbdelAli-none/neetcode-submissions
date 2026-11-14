class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let brackets = {
            "{": "}",
            "[": "]",
            "(": ")"
        }

        for(let char of s) {
            if(char === "{" || char === "(" || char === "[") {
                stack.push(char);
            } else {
                if(stack.length === 0) return false;
                let last = stack.pop();
                if(brackets[last] !== char) {
                    return false;
                }
            }
        }
        return stack.length ? false: true;
    }
}
