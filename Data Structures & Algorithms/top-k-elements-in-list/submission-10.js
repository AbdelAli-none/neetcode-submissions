class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucket = Array.from({length: nums.length});
        let freq = {};

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        for(let [num, value] of Object.entries(freq)) {
            if(!bucket[value]) {
                bucket[value] = [];
            }
            bucket[value].push(parseInt(num, 10));
        }

        return bucket.flat().filter(num => num !== undefined).reverse().slice(0, k);
    }
}
