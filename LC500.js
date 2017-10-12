/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

    const out=[];
    for(let i=0;i<words.length;i++){
        if(isInOneRow(words[i])){
            out.push(words[i]);
        }
    }
    return out;
};

const isInOneRow=(word)=>{
    const up=[ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
    const middle=[ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ];
    const bottom=[ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
    // let myset=new Set(word.split(''));
    let array = [...new Set(word.toLowerCase().split(''))];
    let check;
    if(up.includes(array[0])){
        check = up
    } else if(middle.includes(array[0])){
        check = middle;
    }else if(bottom.includes(array[0])){
        check = bottom;
    }

    for(let i=1;i<array.length;i++){
        if(!check.includes(array[i])) return false;
    }
    return true;
};
let a= ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(a))
let b=[];