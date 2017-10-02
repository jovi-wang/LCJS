/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let array=t.split('');
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i);
        let index = array.indexOf(char);
        if(index>=0){
            array.splice(index,1);
        }
    }
    return array[0];
};
console.log(findTheDifference('abcd','abcde'))