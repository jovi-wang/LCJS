/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length===0) return [];
  const  out=[];
  const rowLen = matrix.length,
      colonLen = matrix[0].length;
  let rowStart = 0,
    rowEnd = rowLen-1,
      colStart = 0,
      colEnd = colonLen-1;
  while(rowStart<=rowEnd && colStart<=colEnd){
      
      //traverse right
      for(let j=colStart;j<=colEnd;j++){
          out.push(matrix[rowStart][j])
      }
      rowStart++;
      //traverse down
      for(let i=rowStart;i<=rowEnd;i++){
          out.push(matrix[i][colEnd]);
      }
      colEnd--;
      //traverse left
      if(rowStart<=rowEnd){
          for(let j=colEnd;j>=colStart;j--){
            out.push(matrix[rowEnd][j]);
          }
          rowEnd--;
      }
      
      //traverse up
      if(colStart<=colEnd){
          for(let i=rowEnd;i>=rowStart;i--){
            out.push(matrix[i][colStart]);
          }
          colStart++;
      }
      
  }
  // console.log(out);
  return out;
};

spiralOrder([
 [ 1, 2, 3, 11]
]);

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n===0) return [];
    const matrix=[];
    for(let i=0;i<n;i++){
        matrix[i]=[];
        matrix[i].fill(0);
    }
    let value=1,
        rowStart = 0,
        rowEnd = n-1,
        colStart = 0,
        colEnd = n-1;
  while(rowStart<=rowEnd && colStart<=colEnd){
      
      //traverse right
      for(let j=colStart;j<=colEnd;j++){
          matrix[rowStart][j]=value++;
      }
      rowStart++;
      //traverse down
      for(let i=rowStart;i<=rowEnd;i++){
          matrix[i][colEnd]=value++;
      }
      colEnd--;
      //traverse left
      if(rowStart<=rowEnd){
          for(let j=colEnd;j>=colStart;j--){
            matrix[rowEnd][j]=value++;
          }
          rowEnd--;
      }
      
      //traverse up
      if(colStart<=colEnd){
          for(let i=rowEnd;i>=rowStart;i--){
            matrix[i][colStart]=value++;
          }
          colStart++;
      }
      
  }
   console.log(matrix);
  return matrix;
    
};

generateMatrix(4)
