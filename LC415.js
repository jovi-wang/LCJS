/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let append = num1.length>num2.length ? num1.length-num2.length : num2.length-num1.length;
    let zeroAppend='0'.repeat(append);
    if(num1.length>num2.length){
        num2 = zeroAppend + num2;
    }else {
        num1 = zeroAppend + num1;
    }
    console.log(num1,num2);
    let carry=0;
    let str='';
    for(let i=num1.length-1;i>=0;i--){
        let sum = parseInt(num1.charAt(i))+parseInt(num2.charAt(i))+ carry;
        carry = sum>=10? 1:0;
        str = sum%10+str;
    }
    return carry===1? carry+str: str;
};

console.log(addStrings('0','0'))