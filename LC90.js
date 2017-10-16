/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const out = [];
    nums.sort((a,b)=>a-b);
    backtrack(out,[],nums,0);
    console.log(out);
    return out;
};

const backtrack = (out,tempArray,nums,start)=>{
    out.push([...tempArray]);
    for(let i=start;i<nums.length;i++){
        if(i>start && nums[i]===nums[i-1]) continue;
        tempArray.push(nums[i]);
        backtrack(out,tempArray,nums,i+1);
        tempArray.pop();
    }
};
// console.log(subsetsWithDup([4,4,4,1,4]))


