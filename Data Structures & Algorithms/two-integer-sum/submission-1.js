class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Time complexity o(n)
    //Space complexity o(1)
    twoSum(nums, target) {
        let m = new Map();
        for (let i = 0; i < nums.length; i++) {
            let find = target - nums[i];
            if (m.has(find)) {
                return [i, m.get(find)];
            }
            m.set(nums[i], i);
        }
    }
}
