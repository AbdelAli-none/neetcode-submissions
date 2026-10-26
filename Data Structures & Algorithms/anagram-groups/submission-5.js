class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        for(let str of strs) {
            let count = new Array(26).fill(0);
            const aCode = "a".charCodeAt(0);

            for(let char of str) {
                count[char.charCodeAt(0) - aCode]++
            }

            let hashedKey = count.join("#");
            if(!res[hashedKey]) res[hashedKey] = []
            res[hashedKey].push(str);
        }

        return Object.values(res)
    }
}
