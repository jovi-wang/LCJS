// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
//
//     Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Note:
//     1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //: Time Limit Exceeded
    /*
    let max;
    for(let i=0;i<=nums.length-k;i++){
        let sum= 0;
        for(let j=i;j<i+k;j++){
            sum+=nums[j];
        }
        if(max){
            max =  sum > max? sum : max;
        }
        else {
            max = sum;
        }

    }
    return max/k;
    */
    
    let sum= 0;
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    let max=sum;
    for(let i=k;i<nums.length;i++){
        sum = sum+ nums[i] - nums[i-k];
        max = sum>max? sum:max
    }
    return max/k;
};

const nums =[-1,-12,-5,-6,-50,-3];
const k = 4;
console.log(findMaxAverage(nums,k));