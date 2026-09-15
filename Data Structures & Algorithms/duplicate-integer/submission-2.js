class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniq = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (uniq.has(nums[i])) {
                return true;
            }
            uniq.add(nums[i]);
        }
        return false;
    }
}
