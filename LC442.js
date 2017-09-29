// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
//     Find all the elements that appear twice in this array.
//
//     Could you do it without extra space and in O(n) runtime?
//
//     Example:
//     Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
//     [2,3]

var findDuplicates = function(nums) {
    //const array = nums.sort(function(a, b){return a-b});
    //using sort or indexof will do another round of loop and search
    const result=[];
    const counts={};
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        counts[item] = counts[item]>0 ? counts[item]+1 : 1;
        if(counts[item]===2){
            result.push(item);
        }
    }
    return result;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));
