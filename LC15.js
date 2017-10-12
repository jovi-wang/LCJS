// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note: The solution myset must not contain duplicate triplets.
//
//     For example, given array S = [-1, 0, 1, 2, -1, -4],
//
//     A solution myset is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result=[];
    const array = nums.sort(function(a, b) { return a - b });
    console.log(array);
    let i =0;
    while(i<array.length-2){
        let left=i+1;
        let right = array.length-1;
        while(left<right){
            let sum = array[i]+array[left]+array[right];
            if(sum===0){
                const temp = [array[i],array[left],array[right]];
                result.push(temp);
                do{
                    left++;
                }
                while(array[left-1]===array[left]);
            }else if(sum<0){
                do{
                    left++;
                }
                while(array[left-1]===array[left]);
            }else {
                do{
                    right--;
                }
                while(array[right+1]===array[right]);
            }
        }
        if(array[i]>=0){
            break;
        }
        do{
            i++;
        }
        while(array[i-1]===array[i]);
    }
    return result;
};

//exceed time limit
var threeSum2 = function(nums) {
    const result = [];
    const array = nums.sort(function (a, b) {
        return a - b
    });
    let i=0;
    while(i< array.length - 2) {
        let j=i+1;
        while(j< array.length - 1){
            const k =  0-(array[i] + array[j]);
            if (array.lastIndexOf(k) > j) {
                const temp = [array[i], array[j], k];
                result.push(temp);
            }
            if(array[i] + array[j] >=0){
                break;
            }
            do{
                j++;
            }
            while(array[j-1]===array[j]);
        }
        if (array[i] >= 0) {
            break;
        }
        do{
            i++;
        }
        while(array[i-1]===array[i]);
    }
    return result;
};
const s0 = [-1, 0, 1, 2, -1, -4];
const s1=[0,0,0,0,0,0,0,0];
const s2=[1,-1,-1,0];
const s3=[-2,0,1,1,2];
const s4=[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];

console.log(threeSum(s0));
console.log(threeSum(s1));
console.log(threeSum(s2));
console.log(threeSum(s3));
console.log(threeSum(s4));
