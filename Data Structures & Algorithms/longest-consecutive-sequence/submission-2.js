class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let longest = 0;
        for(let num of nums) {
            if(!unique.has(num - 1)){
                let length = 1;
                while(unique.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }

}
