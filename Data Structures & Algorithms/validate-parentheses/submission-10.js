class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            "{": "}",
            "[": "]",
            "(": ")",
        };
        let stack = [];
        for (let char of s) {
            if (brackets[char]) {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                let last = stack.pop();
                if(brackets[last] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
