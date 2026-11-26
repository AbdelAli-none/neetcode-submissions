class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        let n = heights.length;
        for (let i = 0; i <= n; i++) {
            let currentHeight = i === n ? 0 : heights[i];

            while (stack.length > 0 && currentHeight < heights[stack.at(-1)]) {
                let poppedIndex = stack.pop();
                let height = heights[poppedIndex];
                let leftWallIndex = stack.length === 0 ? -1 : stack.at(-1);
                let width = i - leftWallIndex - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
