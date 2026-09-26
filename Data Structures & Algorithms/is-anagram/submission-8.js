class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = new Array(26).fill(0);
        const countT = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            countS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            countT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        return countS.join("") === countT.join("");
    }
}
