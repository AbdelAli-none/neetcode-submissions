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
            let comp = target - num;
            if(seen.has(comp)) {
                return [seen.get(comp), i]
            }
            seen.set(num, i);
        }
    }
}
