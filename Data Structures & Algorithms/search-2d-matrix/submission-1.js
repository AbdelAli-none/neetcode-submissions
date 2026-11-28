class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0,
            r = matrix.length - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let firstInMid = matrix[mid][0];
            if (target < firstInMid) {
                r--;
            } else {
                for (let num of matrix[mid]) {
                    if (num === target) {
                        return true;
                    }
                }
                l++;
            }
        }
        return false;
    }
}
