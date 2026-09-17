class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Time complexity o(n^2)
    //Space complexity o(1)
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++)
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
        }
        return [-1];
    }
}
