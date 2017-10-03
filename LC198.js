/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = 0;
    let b = 0;

    for (let i=0; i<nums.length; i++)
    {
        if (i%2===0)
        {
            a = max(a+nums[i], b);
        }
        else
        {
            b = max(a, b+nums[i]);

        }

    }

    return max(a, b);
};
const max=(a,b)=>{
    return a>b? a:b;
};

console.log(rob([3,6,2,1,4,6,5]))