class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Time Complexity: O(n + m)
    // Space Complexity: O(n)
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const s1 = new Map();
        for (const char of s) {
            s1.set(char, (s1.get(char) || 0) + 1);
        }
        for (const char of t) {
            if (!s1.has(char)) {
                return false;
            }
            s1.set(char, s1.get(char) - 1);
            if (s1.get(char) < 0) {
                return false;
            }
        }
        return true;
    }
}
