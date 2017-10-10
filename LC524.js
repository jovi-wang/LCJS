const compareMethod = (a,b)=>{
    if(a.length<b.length) return 1;
    else if(a.length>b.length) return -1;
    else {
        if(a>b) return 1;
        else if(a<b) return -1;
        else return 0;
    }
};
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    d.sort(compareMethod);
    for(let i of d){
        if(isSubSequence(s,i)) return i;
    }
    return '';

};

// s = "abpcplea", d = ["a","b","c"]
s = "abpcplea", d = ["ale","apple","monkey","plea"]
// findLongestWord(s,d)



const isSubSequence = (a,b)=>{
    let i=0,j=0;
    while(i<a.length&&j<b.length){
        if(a.charAt(i)===b.charAt(j)){
            i++;
            j++;
        }else {
            i++;
        }
    }
    return j===b.length
};

/**
 * not sort just compare
 */

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let len=0;
    let max=''
    for(let i of d){
        if(isSubSequence(s,i)) {
            if(i.length>len){
                len = i.length;
                max=i;
            }else if(i.length===len && i<max){
                max=i;
            }
        }
    }
    return max;

};


