class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];
        for(let str of strs) {
            encoded.push(String(`${str.length}#${str}`));
        }
        return encoded.join("");
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
            decoded.push(str.substring(i, j));
            i = j;
        }
        return decoded;
    }
}
