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

var minSubArrayLen2 = function(s, nums) {

    //set min to a large number
   let min=nums.length+1;
   let sum=0;
   let left=0;
   for(let i=0;i<nums.length;i++){
       sum+=nums[i];
       while(sum>=s){
           let temp = i-left+1;
           min = Math.min(min,temp);
           sum= sum-nums[left];
           left++;
       }
   }
   return min===nums.length+1? 0:min;
};
console.log(minSubArrayLen2( 7, [2,3,1,2,4,3]));
console.log(minSubArrayLen2( 15, [1,2,3,4,5]));