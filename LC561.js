/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

    Example 1:
Input: [1,4,3,2]
-2 -1 2 6
Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
    Note:
n is a positive integer, which is in the range of [1, 10000].
    All the integers in the array will be in the range of [-10000, 10000].
*/
var arrayPairSum = function(nums) {
    const array = nums.sort(function(a, b){return a-b});
    console.log(array);
    let sum=0;
    for(let i=0;i< array.length;i=i+2){
        sum += array[i];
    }
    return sum;
};
const nums=[0,-4,3,2];
console.log(arrayPairSum(nums));

