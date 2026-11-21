class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let str of strs) {
            let key = new Array(26).fill(0);
            for (let char of str) {
                let charCode = char.charCodeAt(0) - "a".charCodeAt(0);
                key[charCode]++;
            }
            let joinedKey = key.join("#");
            if (!res[joinedKey]) {
                res[joinedKey] = [];
            }
            res[joinedKey].push(str);
        }

        return Object.values(res);
    }
}
