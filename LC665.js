// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
//
//     We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
//
//     Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first
// 4
// to
// 1
// to get a non-decreasing array.
//     Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10,000].
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
           count++;
           nums[i]=nums[i+1];
           i=-1;
        }
        console.log(nums)

    }
    return count <= 1;
};

const nums=[2,3,3,2,4];
//[2,3,3,2,4];
// [3,4,2,3];
//[4,1,2]
console.log(checkPossibility(nums))
