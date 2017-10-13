/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length===0) return false;
    let rowNum = matrix.length,
        colNum = matrix[0].length;
    
    let left=0,
        right=rowNum*colNum-1;
    while(left<=right){
        console.log(left,right)
        let middle = Math.floor((right+left)/2);
        let i = Math.floor(middle/colNum),
            j = middle%colNum;
        console.log(middle,i,j)
        if(target === matrix[i][j]) return true;
        else if(target > matrix[i][j])
            left = middle+1;
        else right=middle-1;
    }
    return false;
};

let a =searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
],4);
console.log(a)