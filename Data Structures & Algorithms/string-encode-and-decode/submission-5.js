class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];
        for(let str of strs) {
            encoded.push(`${str.length}#${str}`);
        }
        return encoded.join(""); // 5#Hello5#World
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            let word = str.substring(i, j);
            decoded.push(word);
            i = j;
        }
        return decoded;
    }
}
