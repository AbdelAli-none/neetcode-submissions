class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map();
        for (let num of nums) {
            seen.set(num, (seen.get(num) || 0) + 1);
        }

        let buckets = Array.from({ length: nums.length + 1 }, () => []);

        for(let [num, freq] of seen) {
            buckets[freq].push(num)
        }

        let res = [];

        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            // console.log(buckets[i]);
            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) break;
            }
        }

        return res;
    }
}
