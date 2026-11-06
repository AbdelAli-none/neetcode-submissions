class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent = (nums, k) => {
        let res = [];
        let buckets = Array(nums.length + 1)
            .fill()
            .map(() => []);
        let freq = new Map();

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        for (let [key, value] of freq) {
            if (!buckets[value]) {
                buckets[value] = [];
            }
            buckets[value].push(key);
        }

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
    };
}
