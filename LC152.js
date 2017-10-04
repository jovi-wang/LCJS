/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar=nums[0], maxEndingHere=nums[0], minEndingHere=nums[0];
    for (let i=1;i<nums.length;++i){
        if(nums[i]<0){
            let temp=maxEndingHere;
            maxEndingHere = minEndingHere;
            minEndingHere = temp;
        }

        maxEndingHere = Math.max(maxEndingHere * nums[i], nums[i]);
        minEndingHere = Math.min(minEndingHere * nums[i], nums[i]);

        maxSoFar=Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};

console.log(maxProduct([-2,3,-4]));