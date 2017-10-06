/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const count={};
    let maxLength=0;
    let sum=0;
    //initialize the -1 index, and set sum=0 as an standard
    count[sum]=-1;
    for(let i=0;i<nums.length;i++){
        sum = sum + (nums[i]===0? -1:1);
        if(sum in count){
            if(i-count[sum]>maxLength)
                maxLength=i-count[sum];
        }
        else count[sum]=i;
    }
    return maxLength;
    
};
// console.log(findMaxLength([0,1]))

let a='123456789';
console.log(a.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1'));