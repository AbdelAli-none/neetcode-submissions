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
                if(cell === ".") continue;
                let boxIndex = Math.floor(r / 3) * 3+ Math.floor(c / 3);
                let row = `${cell}-row-${r}`;
                let col = `${cell}-col-${c}`;
                let box = `${cell}-box-${boxIndex}`;
                if(seen.has(row) || seen.has(col) || seen.has(box)) return false;
                seen.add(row)
                seen.add(col)
                seen.add(box)
            }
        }
        return true;
    }
}
