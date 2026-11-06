class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums);
        let longest = 0;

        for(let num of unique) {
            if(!unique.has(num - 1)) {
                let counter = 1;
                while(unique.has(num + counter)) {
                    counter++;
                }
                longest = Math.max(longest, counter)
            }
        }
        return longest;
    }
}
