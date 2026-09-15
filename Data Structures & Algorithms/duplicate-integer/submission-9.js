class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //Time complexity o(n)
    //Space Complexity o(n)
    hasDuplicate(nums) {
        const s = new Set();
        for (const num of nums) {
            if (s.has(num)) {
                return true;
            }
            s.add(num);
        }
        return false;
    }
}
