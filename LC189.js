// Rotate an array of n elements to the right by k steps.
//
//     For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
//     Could you do it in-place with O(1) extra space?
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let shift = k% nums.length;
    for(let i=0;i<nums.length-shift;i++){
        let temp = nums.shift();
        nums.push(temp);
    }

};
const nums=[1,2,3];
rotate(nums,1);
console.log(nums);