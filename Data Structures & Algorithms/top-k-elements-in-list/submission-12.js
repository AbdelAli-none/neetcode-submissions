class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        let bucket = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        for(let [num, value] of Object.entries(freq)) {
            bucket[value].push(parseInt(num, 10));
        }

        let result = [];

        for(let i = bucket.length - 1; i >= 0; i--) {
            for(let num of bucket[i]) {
                result.push(num);
                if(result.length == k) {
                    return result;
                }
            }
        }
        return result;
    }
}
