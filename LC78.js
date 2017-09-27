/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const out=[];
    const start = 0;
    backtrack(out,[],nums,start)
    return out;
};

const backtrack = (out, tempArray, nums, start)=>{
    out.push(tempArray);
    for(let i=start;i<nums.length;i++){
        tempArray.push(nums[i]);
        backtrack(out,tempArray, nums, i+1);
        tempArray.pop();
    }
};

console.log(subsets([1,2,3]));