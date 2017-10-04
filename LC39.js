/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result=[];
    const sol=[];
    const sortedSet = candidates.sort((a,b)=>{return a-b});
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
const combination = (sortedSet, target, sol, result,index)=>{
    let temp=0;
    if(sol.length>0){
        temp = sol.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
    }

    if(temp===target){
        console.log(sol)
        result.push(sol.toString());
        return;
    }
    if(temp<target){
        for(let i=index;i<sortedSet.length;i++){
            sol.push(sortedSet[i]);
            combination(sortedSet, target, sol, result, i)
            sol.pop();
        }
    }
};

console.log(combinationSum([2, 3, 6, 7],7))