class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Time Complexity: O(n + m)
    // Space Complexity: O(n + m)
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const m = new Map();
        for (const char of s) {
            m.set(char, (m.get(char) || 0) + 1);
        }
        for (const char of t) {
            if (!m.has(char)) {
                return false;
            }
            m.set(char, (m.get(char) || 0) - 1);
            if (m.get(char) < 0) {
                return false;
            }
        }
        return true;
    }
}
