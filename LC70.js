/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 0;
    for(let i=0,j=n;i<=j;i++,j--){
        count+=combination(j,i);
    }
    return count;

};


const combination = (n,k)=>{
    if (n===0){
        return 1;
    }
    let up = 1;
    let down = 1;
    for(let i=1;i<=k;i++,n--){
        down *= i;
        up *=n;

    }
    return up/down;
};