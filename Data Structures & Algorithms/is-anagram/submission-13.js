class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false;
        let one = new Map();
        let two = new Map();

        for (let i = 0; i < s.length; i++) {
            one.set(s[i], (one.get(s[i]) || 0) + 1);
            two.set(t[i], (two.get(t[i]) || 0) + 1);
        }

        for (const [key, value] of one) {
            if (two.get(key) !== value) {
                return false;
            }
        }
        return true;
    };
}
