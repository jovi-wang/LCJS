/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    //transpose matrix
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            let temp = matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    //reverse order in each row
    for(let i=0;i<len;i++){
        matrix[i].reverse();
    }
    console.log(matrix)
};

rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], );