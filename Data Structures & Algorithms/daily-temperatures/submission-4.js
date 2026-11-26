class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let res = Array(n).fill(0);
        let stack = [];
        for(let i = 0; i < n; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
                let poppedIndex = stack.pop();
                let distance = i - poppedIndex; 
                res[poppedIndex] = distance; 
            }
            stack.push(i);
        }
        return res;
    }
}
