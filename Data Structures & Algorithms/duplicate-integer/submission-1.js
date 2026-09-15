class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let unique =new Set(nums);
       if(nums.length!=unique.size){
        return true;
       }
       return false;
    }
}
