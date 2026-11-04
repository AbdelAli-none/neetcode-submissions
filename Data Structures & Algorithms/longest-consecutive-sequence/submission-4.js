class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            if(!unique.has(num - 1)) {
                let currentLen = 1;
                while(unique.has(num + currentLen)) {
                    currentLen++;
                }
                longest = Math.max(longest, currentLen);
            }
        }
        return longest;
    }
}
