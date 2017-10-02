/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase()===word || word.toLowerCase()===word){
        return true;
    }else {
        let char = word.charAt(0);
        if(char !== char.toUpperCase()){
            return false
        }else {
            const sub = word.substring(1);
            return sub === sub.toLowerCase();
        }

    }

};
console.log(detectCapitalUse('ew'));