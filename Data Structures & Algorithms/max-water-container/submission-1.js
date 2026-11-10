class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0; 
        let r = heights.length - 1;

        while(l < r) {
            let area = (r - l) * Math.min(heights[l], heights[r]);
            res = Math.max(res, area); // 7 | 
 
            if(heights[l] < heights[r]) { // heights[l] = 7 | heights[r] = 6
                l++
            } else {
                r--;
            } 
        }
        return res;
    }
}
