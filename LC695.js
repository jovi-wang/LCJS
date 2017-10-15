/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                let area = helper(grid,i,j);
                max = area>max? area:max;
            }

        }
    }
    return max;
};

const helper = (grid,i,j)=>{
    if(i>=0 && i<grid.length && j>=0 && j<grid[0].length && grid[i][j]===1){
        grid[i][j]=0;
        return 1+helper(grid,i+1,j)+helper(grid,i-1,j)+helper(grid,i,j+1)+helper(grid,i,j-1)
    }
    return 0;
};

let a =[[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(a));
console.log(a)