class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //time complexity O(n log n + m log m)
    //space complexity O(n + m)
    isAnagram(s, t) {
        let s1 = s.split("");
        let t1 = [...t];
        s1.sort();
        t1.sort();
        return s1.join("") === t1.join("");
    }
}
