class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();

        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if(seen.has(target - num)) {
                return [seen.get(target - num), i]
            } else {
                seen.set(num, i);
            }
        }
    }
}

// {3, }