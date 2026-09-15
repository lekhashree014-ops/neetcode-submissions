class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const m = new Map();
        for (const num of nums) {
            if (m.has(num)) {
                return true;
            }
            m.set(num,1);
        }
        return false
    }
}
