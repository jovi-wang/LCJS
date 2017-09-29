// A zero-indexed array A consisting of N different integers is given. The array contains all integers in the range [0, N - 1].
//
//     Sets S[K] for 0 <= K < N are defined as follows:
//
// S[K] = { A[K], A[A[K]], A[A[A[K]]], ... }.
//
//     Sets S[K] are finite for each K and should NOT contain duplicates.
//
//     Write a function that given an array A consisting of N integers, return the size of the largest set S[K] for this array.
//
//     Example 1:
// Input: A = [5,4,0,3,1,6,2]
// Output: 4
// Explanation:
//     A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
//
// One of the longest S[K]:
// S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
// Note:
//     N is an integer within the range [1, 20,000].
//     The elements of A are all distinct.
//     Each element of array A is an integer within the range [0, N-1].

/**
 * @param {number[]} nums
 * @return {number}
 */
//time limit exceeded
var arrayNesting = function(nums=[5,4,0,3,1,6,2]) {

    let max=0;
    for(let i=0;i<nums.length;i++){
        const array=[];
        let newIndex=nums[i];
        while(!array.includes(newIndex)){
            array.push(newIndex);
            newIndex=nums[newIndex];
        }
        if(array.length>max){
            max=array.length;
        }
    }
    return max;
};
// console.log(arrayNesting());

//time limit exceeded only one case not passed
var arrayNesting2 = function(nums=[5,4,0,3,1,6,2]) {

    let max=1;
    const array=[];
    for(let i=0;i<nums.length;i=i+1){
        let temp=1;
        let newIndex=nums[i];
        array.push(i);
        while(newIndex!==i){
            array.push(newIndex);
            temp++;
            newIndex=nums[newIndex];
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
};
// console.log(arrayNesting2([0,3,2,1,4]));

var arrayNesting3 = function(nums=[5,4,0,3,1,6,2]) {

    let maxsize = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums);
        let size = 0;
        for (let k = i; nums[k] >= 0; size++) {
            let newIndex = nums[k];
            nums[k] = -1; // mark nums[k] as visited;
            k = newIndex;
        }
        if(size>maxsize){
            maxsize=size;
        }
    }
    return maxsize;
};
console.log(arrayNesting3());