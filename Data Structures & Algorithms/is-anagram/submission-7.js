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
        const s1 = new Map();
        const t1 = new Map();
        for (const ele of s) {
            s1.set(ele, (s1.get(ele) || 0) + 1);
        }
        for (const ele of t) {
            t1.set(ele, (t1.get(ele) || 0) + 1);
        }
        for (const [char, count] of s1) {
            if (t1.get(char) !== count) {
                return false;
            }
        }
        return true;
    }
}
