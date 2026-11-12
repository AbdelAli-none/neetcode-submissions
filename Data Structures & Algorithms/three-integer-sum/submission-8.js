class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            if (sorted[i] > 0) break;

            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) {
                let sum = sorted[i] + sorted[l] + sorted[r];
                if(sum === 0) {
                    res.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    r--;

                    while(l < r && sorted[l] === sorted[l - 1]) l++;
                    while(l < r && sorted[r] === sorted[r + 1]) r--;
                } else if(sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}
