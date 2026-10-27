class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams = (strs) => {
        let res = {};
        let aCode = "a".charCodeAt();

        for (let str of strs) {
            let key = new Array(26).fill(0);

            for (let char of str) {
                key[char.charCodeAt(0) - aCode]++;
            }

            if (!res[key]) {
                res[key] = [];
            }

            res[key].push(str);
        }

        return Object.values(res);
    };
}
