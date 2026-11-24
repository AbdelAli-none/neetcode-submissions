class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0;
        let r = heights.length - 1;
        while(l < r) {
            let height = Math.min(heights[l], heights[r]);
            let width = r - l;
            let area = height * width;
            maxArea = Math.max(maxArea, area);
            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
