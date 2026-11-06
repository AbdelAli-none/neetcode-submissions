class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (val === ".") continue;

                let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                let rowKey = `${val}-row-${r}`;
                let colKey = `${val}-col-${c}`;
                let boxKey = `${val}-box-${boxIndex}`;

                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) return false;

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
