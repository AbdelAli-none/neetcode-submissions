class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alpha = s.split("").filter(char => char.match(/[a-z]|[0-9]/i)).join("").toLowerCase();
        let i = 0;
        let j = alpha.length - 1;

        while(i < j) {
            let start = alpha[i];
            let end = alpha[j];
            if(start === end) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
