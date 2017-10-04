/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result=[];
    const sol=[];
    combination(result,sol,k,n);
    const out=[];
    for(let i=0;i<result.length;i++){
        out[i]=[];
        let temp = result[i].split(',');
        temp.forEach( (item)=>{
            out[i].push(parseInt(item));
        });

    }
    return out;
};
const combination=(result,sol,k,n)=>{
    // console.log(sol);
    if (sol.length === k && n === 0) {
        // console.log(sol);
        result.push(sol.toString());
        return;
    }
    if (sol.length < k) {
        let i= sol.length>0? sol[sol.length-1]+1 : 1;
        for (; i<=9 ; ++i) {
            if (n - i < 0) return;
            sol.push(i);
            combination(result, sol, k, n - i);
            sol.pop();
          }
    }
};
console.log(combinationSum3(3,10))
