class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     // Time Complexity: O(n log n)
    // Space Complexity: O(n)
    twoSum(nums, target) {
        const arr = nums.map((value,index)=>[value,index])
        arr.sort((a,b)=>a[0]-b[0]);
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            if (arr[left][0] + arr[right][0] === target) {
                return [arr[left][1], arr[right][1]];
            }
            if (arr[left][0] + arr[right][0] > target) {
                right--;
            }
            if (arr[left][0] + arr[right][0] < target) {
                left++;
            }
        }
        return[-1];
    }
}
