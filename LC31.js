/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let index=0;
    while (nums[index]>=nums[index+1]){
        index=index+1;
    }
    //if no next permutation sort ascending
    if(index===nums.length-1) nums.sort((a,b)=>a-b);
    //find the index whose value is a little greater than index's
    else{
       
        let swap = index+1;
        let min = nums[swap]-nums[index];
        for(let i=swap;i<nums.length;i++){
            if(nums[i]>nums[index] && nums[i]-nums[index] < min){
                 min = nums[i]-nums[index];
                 swap = i;
            }
        }
        let temp = nums[index];
        nums[index] = nums[swap];
        nums[swap] = temp;
        let arr1 = nums.slice(0, index+1);
        let arr2 = nums.slice(index+1).sort((a,b)=>a-b);
        nums = arr1.concat(arr2);
    }
    console.log(nums)
};
let a=[7,2,5,3,2,1];
nextPermutation([1,2,3]);