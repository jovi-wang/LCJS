//
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const conts = {};
    for(let i=0;i<nums.length;i++){
        conts[nums[i]]= conts[nums[i]]>0 ? conts[nums[i]]+1 : 1;
        if(conts[nums[i]]===2){
            return true;
        }
    }
    return false;
};