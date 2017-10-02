/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const hash = {};
    const word = str.split(' ');
    if(pattern.length!==word.length) return false;
    for(let i=0;i<pattern.length;i++){
        let char = pattern.charAt(i);
        //same key but different value
        if(char in hash){
            if(hash[char]!==word[i]) return false;
        }
        //same value but different key
        else if(Object.values(hash).indexOf(word[i])>-1){
            if(!hash.hasOwnProperty(char)) return false;
        }
        //insert into hash table
        else {
            hash[char] = word[i];
        }
    }
    return true;
};

console.log(wordPattern('abba','dog dog dog dog'))
