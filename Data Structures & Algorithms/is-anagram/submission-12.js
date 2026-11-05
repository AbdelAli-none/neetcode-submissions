class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let one = new Map();
        let two = new Map();

        for (let char of s) {
            one.set(char, (one.get(char) || 0) + 1);
        }
        for (let char of t) {
            two.set(char, (two.get(char) || 0) + 1);
        }

        for(const [key, value] of one) {
            if(two.get(key) !== value) return false;
        }
        return true;
    }
}
