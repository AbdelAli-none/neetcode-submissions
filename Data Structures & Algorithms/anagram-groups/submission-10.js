class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let word of strs) {
            const count = new Array(26).fill(0);
            for(let c of word) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            const key = count.join("#");
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(word);
        }
        return Object.values(res)
    }
}
