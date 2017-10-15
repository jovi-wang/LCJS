/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length===1) return;
    //from end to front find the first pair that decrease, then swap and then sort the rest
    let index = nums.length-2;
    while(nums[index+1]<=nums[index]){
        index--;
    }
    //if no next permutation, sort and return
    if(index===-1){
        nums.sort((a,b)=>a-b);
    }else{
        let swap = index+1;
        //from index till end, find the value just larger than swap
        let min = nums[swap]-nums[index];
        for(let i = index; i<nums.length;i++){
            if(nums[i]>nums[index] && nums[i]-nums[index] < min){
                min = nums[i]-nums[index];
                swap = i;
            }
        }
        //swap index
        let temp = nums[index];
        nums[index] = nums[swap];
        nums[swap] = temp;
        const arr = nums.slice(index+1).sort((a,b)=>a-b);
        for(let i=0; i<arr.length;i++){
            nums[index+1+i] = arr[i];
        }
    }


};
let a=[7,2,5,3,2,1];
// let b= [1,2,0,3,0,1,2,4,1]
let b=[1,1]
nextPermutation(b);

console.log(b)