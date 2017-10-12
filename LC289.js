/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
           let lives = countLives(board,i,j);
           //live at first state
           if(board[i][j]&1 >0){
               if(lives===2 || lives===3)
                   board[i][j] = 3;
           }else {
               //died at first state
               if(lives===3)
                   board[i][j] = 2;
           }
        }
    }
    for(let i=0;i<board.length;i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = board[i][j]>>1;
        }
    }
    

};
/*
Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/

//get last bit  a&1
//get first bit a>>1
//set fitst bit 1  a|2;

//check all 8 neighours condition, only for last bit
const countLives=(board,i,j)=>{
    let lives=0;
    //top three
    if(i-1>=0){
        lives = board[i-1][j]&1 >0? lives+1:lives;
        if(j-1>=0) lives = board[i-1][j-1]&1>0? lives+1:lives;
        if(j+1<board[0].length) lives = board[i-1][j+1]&1>0? lives+1:lives;
    }
    //bottom three
    if(i+1<board.length){
        lives = board[i+1][j]&1>0? lives+1:lives;
        if(j-1>=0) lives = board[i+1][j-1]&1>0? lives+1:lives;
        if(j+1<board[0].length) lives = board[i+1][j+1]&1>0? lives+1:lives;
    }
    //left and right
    if(j-1>=0)
        lives = board[i][j-1]&1>0? lives+1:lives;
    if(j+1<board[0].length)
        lives = board[i][j+1]&1>0? lives+1:lives;
    
    return lives
};
let board =[[1,1,1],[1,1,1],[1,1,1]];
gameOfLife(board);
console.log(board)


