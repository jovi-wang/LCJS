/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const out=[];
    backtrack(out,[],nums,0);
    return out;
};

const backtrack = (out, tempArray, nums, start)=>{
    console.log(tempArray)
    const temp = [...tempArray];
    out.push(temp);
    for(let i=start;i<nums.length;i++){
        tempArray.push(nums[i]);
        backtrack(out,tempArray, nums, i+1);
        tempArray.pop();
    }
};

console.log(subsets([1,2,2]));