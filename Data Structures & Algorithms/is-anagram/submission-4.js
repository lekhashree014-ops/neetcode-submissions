class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Time Complexity: O(n + m)
    // Space Complexity: O(1)
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const count = new Array(26).fill(0);
        for (let char of s) {
            count[char.charCodeAt(0) - 97]++;
        }
        for (let char of t) {
            count[char.charCodeAt(0) - 97]--;
            if (count[char.charCodeAt(0) - 97] < 0) {
                return false;
            }
        }
        return true;
    }
}
