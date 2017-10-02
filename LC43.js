/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==='0' || num2 ==='0') return '0';
    let sum = '';
    for(let i=0;i<num1.length;i++){
        let digit = parseInt(num1.charAt(num1.length-1-i));
        let temp = multiplySingle(num2,digit)+ '0'.repeat(i);
        sum = addStrings(temp,sum);
    }
    return sum.toString();
};

const multiplySingle = (num1,num2) => {
    if(num1==='0' || num2 ==='0') return '0';
    let sum = '';
    let carry = 0;
    for(let i=num1.length-1;i>=0;i--){
        // console.log(parseInt(num1.charAt(i)));
        let temp = parseInt(num2) * parseInt(num1.charAt(i)) + carry;
        let digit = temp %10;
        carry = (temp - digit)/10;
        sum = digit + sum;
    }

    return carry!==0? carry + sum: sum;
};


var addStrings = function(num1, num2) {
    let append = num1.length>num2.length ? num1.length-num2.length : num2.length-num1.length;
    let zeroAppend='0'.repeat(append);
    if(num1.length>num2.length){
        num2 = zeroAppend + num2;
    }else {
        num1 = zeroAppend + num1;
    }
    let carry=0;
    let str='';
    for(let i=num1.length-1;i>=0;i--){
        let sum = parseInt(num1.charAt(i))+parseInt(num2.charAt(i))+ carry;
        carry = sum>=10? 1:0;
        str = sum%10+str;
    }
    return carry===1? carry+str: str;
};

// console.log(multiply('9113','0'));
// console.log(multiplySingle('9999','9'))
// console.log('0'.repeat(1))