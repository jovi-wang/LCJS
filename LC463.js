/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let island=0,neighbour=0;
    for(let i=0;i<grid.length;i++)
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1) {
                island++;
                if(i+1<grid.length && grid[i+1][j]===1)
                    neighbour++;
                if(j+1<grid[0].length && grid[i][j+1]===1)
                    neighbour++;
            }
        }
    return 4*island-2*neighbour;
};
