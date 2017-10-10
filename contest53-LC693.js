/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let binary=n.toString(2);
  for(let i=1;i<binary.length;i++){
      if(binary[i]===binary[i-1]) return false;
  }
  return true;
};

/*
Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101

Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111
*/
/*
let stickers= ["with", "example", "science"];

let out={};
for(let n=0;n<stickers.length;n++){
    let element=stickers[n];
    for(let i=0;i<element.length;i++){
        let len= element.length-i;
        for(let j=1;j<=len;j++){
             let temp =element.substr(i,j);
            out[temp] = (out[temp]||0) + 1
        }
    }
}

// console.log(out);
let target='thehat1';
let ans=0;
let i=0;
while(i<target.length){
    let j=1;
    if(out[target.substr(i,j)]>0){
        while(target.substr(i,j) in out){
            console.log(target.substr(i,j));
            j++;
        }
        i=i+j-1;
        ans++;
    }
    else {
        ans=-1;
        break;
    };
    
}
*/

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    
    let out={};
    for(let n=0;n<stickers.length;n++){
        let element=stickers[n];
        for(let i=0;i<element.length;i++){
            let len= element.length-i;
            for(let j=1;j<=len;j++){
                 let temp =element.substr(i,j);
                out[temp] = (out[temp]||0) + 1
            }
        }
    }
    for(let i=0;i<target.length;i++){
        if(!target[i] in out) return -1;
    }
    let ans=0;
    let i=0;
    while(i<target.length){
        let j=1;
        console.log(target.substr(i,j));
        while(target.substr(i,j) in out){
            j++;
            console.log(target.substr(i,j));
            if(i+j>target.length) break;
        }
        console.log(i,j)
        i=i+j-1;
        ans++;
    }
        
        
    
    return ans;
};
// console.log(minStickers(["notice", "possible"], "basicbasic"))
// console.log(minStickers(["with", "example", "science"], "thehat"))
//200, 693,694,695,691

const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
const moves = ['up', 'left', 'right', 'left', 'left'];
function streetFighterSelection(fighters, position, moves){
  
  let out=[];
  const height = fighters.length;
  const width=fighters[0].length;
  let x=position[0],y=position[1];
  
  moves.forEach((item)=>{
      switch (item){
          case 'up':
              x= x-1<0? 0 : x-1;
              break;
          case 'down':
              x= x+1>height-1? height-1 : x+1;
              break;
          case 'left':
              y= y-1<0? width-1 : y-1;
              break;
          case 'right':
              y= y+1>width-1? 0 : y+1;
              break;
      }
      //  console.log(x,y);
      // console.log(fighters[x][y])
      out.push(fighters[x][y]);
  });
  return out;
}
console.log(streetFighterSelection(fighters,[0,0],moves))