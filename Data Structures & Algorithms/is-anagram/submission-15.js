class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false;

        let counter = Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            counter[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            counter[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }
        return counter.every(item => item === 0);
    };
}
