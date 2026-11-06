class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent = (nums, k) => {
        let res = [];
        let buckets = [];
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

        buckets = buckets.filter((sub) => sub);

        for (let i = buckets.length; i >= 0; i--) {
            let subBucket = buckets[i];
            if (subBucket) {
                while (subBucket.length) {
                    res.push(subBucket.pop());
                }
            }
        }

        return res.slice(0, k);
    };
}
