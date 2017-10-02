/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let binary=Math.abs(num).toString(2);
    let diff = 32-binary.length;
    binary = '0'.repeat(diff) + binary;
    if(num<0){
        let carry=1;
        let negative='';
        for(let i=binary.length-1;i>=0;i--){
            let temp = parseInt(binary.charAt(i));
            let char = temp===0? 1:0;
            negative = char+ negative;
        }
        binary='';

        for(let i =negative.length-1;i>=0;i--){
            let temp = parseInt(negative.charAt(i))+carry;
            let char = temp%2;
            carry = temp>1? 1:0;
            binary = char + binary;
        }
    }

    let hex='';
    for(let i=0;i<binary.length;i+=4){
        let temp = binary.substr(i,4);
        hex = hex+ parseInt(temp,2).toString(16);
    }
    while(hex.startsWith('0') && hex.length>1){
        hex=hex.substr(1);
    }
    return hex;
};

let a =0;
console.log(toHex(-2))

let mySet = new Set([1,1,2,3]);
let array =[...mySet]
console.log(array)