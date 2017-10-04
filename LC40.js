/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result=[];
    const sortedSet = candidates.sort((a,b)=>{return a-b});
    const sol=[];
    combination(sortedSet, target, sol, result,0);
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

const combination = (sortedSet, remain, sol, result, index)=>{


    if(remain<0) return;
    else if(remain===0){
        console.log(sol);
        result.push(sol.toString());
    }else{
        for(let i=index ; i<sortedSet.length; i++){
            if(sortedSet[i]>remain) return;
            if(i > index && sol[i] === sol[i-1]) continue; /** skip duplicates */
            sol.push(sortedSet[i]);
            combination(sortedSet, remain-sortedSet[i], sol, result, i+1);
            sol.pop();
        }
    }

};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5],8));