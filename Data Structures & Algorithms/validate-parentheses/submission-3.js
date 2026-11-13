class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const brackets = {
            "[": "]",
            "{": "}",
            "(": ")",
        };

        for (let char of s) {
            if (char === "[" || char === "{" || char === "(") {
                stack.push(char);
            } else {
                let last = stack.pop();
                if (char !== brackets[last]) {
                    return false;
                }
            }
        }
        return stack.length ? false : true;
    }
}
