class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false;
        let res = new Map();

        for (let i = 0; i < s.length; i++) {
            res.set(s[i], (res.get(s[i]) || 0) + 1);
            res.set(t[i], (res.get(t[i]) || 0) - 1);
        }

        for (let [key, value] of res) {
            if (value !== 0) {
                return false;
            }
        }
        return true;
    };
}
