// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const out=[];
    for(let i=0;i<numRows;i++){
        out[i]=[];
        for(let j=0;j<=i;j++){
            out[i].push(combination(i,j));
        }
    }
    return out;
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

 console.log(generate(5));
 const a =[2,3,4,5,2];
 console.log(new Set([...a]))