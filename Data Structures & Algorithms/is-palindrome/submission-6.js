class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            while(l < r && !isAlphaNumeric(s[l])) {
                l++;
            }
            while(l < r && !isAlphaNumeric(s[r])) {
                r--;
            }
            while(l < r && s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
