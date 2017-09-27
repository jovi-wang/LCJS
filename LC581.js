// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
//
// You need to find the shortest such subarray and output its length.
//
// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const newArray = nums.slice();
    newArray.sort((a,b)=>{return a-b});
    let left = 0;
    while(nums[left] === newArray[left]){
        left++;
        if(left===nums.length){
            return 0;
        }
    }
    let right = nums.length-1;
    while(nums[right] === newArray[right]){
        right--;
    }
    return Math.abs(right-left)+1;

};
console.log(findUnsortedSubarray([1]));
//1,3,2,2,2
//[1,3,2,3,3]