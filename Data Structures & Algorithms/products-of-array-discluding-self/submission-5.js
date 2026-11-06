class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = Array(nums).fill(1);

        for(let i = 1; i < nums.length; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let suffix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i]
        }
        return res;
    }
}
