class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let l = 0;
        let r = rows * cols - 1;
        while(l <= r) {
            let mid = Math.floor((l + r) / 2);
            let row = Math.floor(mid / cols);
            let col = mid % cols;
            let val = matrix[row][col];
            if(val === target) {
                return true;
            } else if(val < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;
    }
}
