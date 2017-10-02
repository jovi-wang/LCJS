/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let str = n.toString();

    while(str !=='1'){
        if(str==='4') return false;
        let sum = 0;
        for(let i=0;i<str.length;i++){
            let number = parseInt(str.charAt(i));
            sum += number*number;
        }
        str = sum.toString();
        console.log(str);
    }
    return true;



};
console.log(isHappy(2))