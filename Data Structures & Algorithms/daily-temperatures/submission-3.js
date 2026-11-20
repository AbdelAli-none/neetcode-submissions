class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let res = new Array(n).fill(0);
        let stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                let pastIndex = stack.pop();
                res[pastIndex] = i - pastIndex;
            }
            stack.push(i)
        }
        return res;
    }
    
}
