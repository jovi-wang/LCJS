/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar=nums[0], maxEndingHere=nums[0];
    for (let i=1;i<nums.length;++i){
        maxEndingHere= Math.max(maxEndingHere+nums[i],nums[i]);
        maxSoFar=Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};
maxSubArray([1,-2,-3,4,-1,2,1,-5,4]);