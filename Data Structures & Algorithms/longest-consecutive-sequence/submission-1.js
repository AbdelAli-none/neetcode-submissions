class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let res = 0;

        for(let num of nums) {
            if(!unique.has(num - 1)) {
                let currentNum = num;
                let currentLen = 1;
                while(unique.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                res = Math.max(res, currentLen);
            }
        }
        return res;
    }
}
