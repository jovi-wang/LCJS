// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
//     You may assume that the array is non-empty and the majority element always exist in the array.
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        counts[item] = counts[item]>0 ? counts[item]+1 : 1;
        if(counts[item]>nums.length/2){
            return item;
        }
    }
};
console.log(majorityElement([1,1,0]));