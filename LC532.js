/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const count={};
    for(let item of nums){
        count[item] = count[item]>0? count[item]+1:1;
    }
    console.log(count)
    let out=0;
    if(k<0) return out;
    for(let pro in count){
        // console.log(parseInt(pro) +2, count[parseInt(pro) +2])
        if(k===0){
            out = count[pro]>=2? out+1: out;
        }else{
            let temp = parseInt(pro) +k;
            if(count[temp]>0){
                out++;
            }
        }
    }
    return out;
};

// console.log(findPairs([3,1,4,1,5],2))
console.log(findPairs([1,2,3,4,5],1))