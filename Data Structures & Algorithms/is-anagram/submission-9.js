class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false;
        let tracker = {};
        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            const tChar = t[i];
            tracker[sChar] = (tracker[sChar] || 0) + 1;
            tracker[tChar] = (tracker[tChar] || 0) - 1;
        }

        for (let [key, value] of Object.entries(tracker)) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
    };
}
