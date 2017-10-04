/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//time limit exceeds
var minSubArrayLen = function(s, nums) {

    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    if(sum<s) return 0;
    else if(sum===s) return nums.length;
    let min=nums.length;
    for(let i=0;i<nums.length;i++){
        let temp=nums[i];
        let j=i+1;
        while(j<nums.length && temp<s){
            temp+=nums[j];
            j++;
        }
        if(temp>=s){
            min = Math.min(min,j-i);
        }
    }
    return min;
};
console.log(minSubArrayLen( 7, [2,3,1,2,4,3]));
// console.log(minSubArrayLen( 11, [1,2,3,4,5]));