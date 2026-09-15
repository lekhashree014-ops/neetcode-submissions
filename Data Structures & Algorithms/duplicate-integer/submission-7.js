class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //Time complexity o(n)
    //Space Complexity o(n)
    hasDuplicate(nums) {
        const s =new Set(nums)
        return nums.length !== s.size;
    }
}
