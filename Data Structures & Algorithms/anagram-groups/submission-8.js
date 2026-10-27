class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams = (strs) => {
        let res = {};
        let aCode = "a".charCodeAt();

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - aCode]++;
            }

            const key = count.join("|")

            if (!res[key]) {
                res[key] = [];
            }

            res[key].push(str);
        }

        return Object.values(res);
    };
}
