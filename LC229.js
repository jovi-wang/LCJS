// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.
//
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const counts = {};
    const result=[];
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        counts[item] = counts[item]>0 ? counts[item]+1 : 1;
        // if(counts[item]>nums.length/3){
        //     if(!result.includes(item)){
        //         result.push(item);
        //     }
        // }
    }
    for (let prop in counts) {
        if(counts[prop]>nums.length/3){
            result.push(parseInt(prop));
        }
    }
    return result;

};
//either way passed
console.log(majorityElement([1,1]));