class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                let cell = board[r][c];
                if(cell === ".") {
                    continue;
                }
                let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                let row = `${cell}-row-${r}`;
                let col = `${cell}-col-${c}`;
                let boxKey = `${cell}-box-${boxIndex}`
                if(seen.has(boxKey) || seen.has(row) || seen.has(col)) {
                    return false;
                }
                seen.add(boxKey);
                seen.add(row);
                seen.add(col);
            }
        }
        return true;
    }
}
