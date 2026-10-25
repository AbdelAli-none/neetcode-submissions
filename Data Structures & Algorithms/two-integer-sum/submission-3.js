class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let comp = target - num;
            if (map.has(comp)) {
                return [map.get(comp), i];
            }
            map.set(num, i);
        }
    }
}
