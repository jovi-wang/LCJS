// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this in place with constant memory.
//
//     For example,
//     Given input array nums = [1,1,2],
//
//     Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i=1;
    while(i<nums.length){
        if(nums[i]===nums[i-1]){
            nums.splice(i,1);
        }else {
            i++;
        }
    }
    return nums.length;
};
const nums = [1,2,2,3,3,3,4,5,6];
console.log(removeDuplicates(nums));