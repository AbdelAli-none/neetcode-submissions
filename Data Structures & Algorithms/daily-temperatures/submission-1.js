class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];
        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                let pastIndex = stack.pop();
                res[pastIndex] = i - pastIndex;
            }
            stack.push(i)
        }
        return res;
    }
}
