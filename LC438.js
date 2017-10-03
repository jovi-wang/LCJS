/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//time limit exceeded
var findAnagrams = function(s, p) {
    const sortedP=p.split('').sort().join('');
    const hash={};
    const out=[];
    for(let i=0;i<s.length-p.length+1;i++){
        let str = s.substr(i,p.length);
        console.log(str);
        //the same str, push into out array straight away
        if(hash[str]){
             out.push(i);
        }
        else if(isAnagrams(str,sortedP)){
           out.push(i);
           hash[str]=true;
        }
    }
    return out;
};
const isAnagrams = (str,sortedP)=>{
   return str.split('').sort().join('')===sortedP;
};

//time limit exceeded
var findAnagrams2 = function(s, p) {
    const out=[];
    if (p === null || s === null || s.length < p.length) return out;
    const hash={};

    for(let i=0;i<s.length-p.length+1;i++){
        let str = s.substr(i,p.length);
        //console.log(str);
        //the same str, push into out array straight away
        if(hash[str]){
            out.push(i);
        }
        else if(isAnagrams2(str,p)){
            out.push(i);
            hash[str]=true;
        }
    }
    return out;
};
const isAnagrams2 = (str,p)=>{
    const hash={};

    for(let i=0;i<p.length;i++){
        let char = p.charAt(i);
        hash[char] = hash[char]>0 ? hash[char]+1 : 1;
    }
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        if(hash[char]){
            hash[char]--;
            if(hash[char]<0) return false;
        }else return false;
    }
    return true;

};

// console.log(findAnagrams('ababababa','ab'))


var findAnagrams3 = function(s, p) {
    const out=[];
    if(s.length<p.length) return out;
    const hash={};
    for(let i=0;i<p.length;i++){
        let char = p.charAt(i);
        hash[char] = hash[char]>0? hash[char]+1 : 1;
    }
    let left=0, right=0, count=p.length;
    while(right<s.length){
        //if char at right appear in hash, decrease count
        if(hash[s.charAt(right)]>=0){
            hash[s.charAt(right)]--;
            count--;
            right++;
        }
        //if char at left appear in hash, increase count
        if(right-left===p.length && hash[s.charAt(left)]>=0) {
            hash[s.charAt(left)]++;
            count++;
            left++;
        }
        if(count===0){
            out.push(left);
        }
    }
    return out;
};

console.log(findAnagrams3("cbaebabacd",'abc'))
