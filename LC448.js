// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
//     Find all the elements of [1, n] inclusive that do not appear in this array.
//
//     Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
//     Example:
//
// Input:
//     [4,3,2,7,8,2,3,1]
//
// Output:
//     [5,6]
//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers1 = function(nums) {
    const out=[];
    for(let i=0;i<nums.length;i++){
       let newIndex = Math.abs(nums[i])-1;
       if(nums[newIndex]>0){
           nums[newIndex]= -nums[newIndex];
       }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            out.push(i+1)
        }
    }
    return out;

};
//exceed time limit complexity more than O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const out=[];
    for(let i=0;i< nums.length;i++){
        while(nums[i]!==i+1){
            let temp = nums[i];
            nums[i] = nums[temp-1];
            nums[temp-1]=temp;
            if(nums[i]===nums[nums[i]-1]){
                break;
            }
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i+1){
            out.push(i+1);
        }
    }
    return out;

};
const nums=[4,3,2,7,8,2,3,1];
const nums2=[1,1]
console.log(findDisappearedNumbers1(nums));