class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let res = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++) {
            let sCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
            let tCode = t[i].charCodeAt(0) - "a".charCodeAt(0);
            res[sCode]++;
            res[tCode]--;
        }
        return res.every(code => code === 0)
    }
}
