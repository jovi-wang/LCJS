/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const letter = [];
    const index = [];
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i).toLowerCase();
        if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ){
            letter.push(s.charAt(i));
            index.push(i);
        }
    }
    for(let i=0;i<index.length;i++){
        let rep = letter.pop();
        let ind = index[i];
        s = s.substr(0,ind) + rep + s.substr(ind+1);
    }
    return s;
};
