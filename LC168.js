/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const array=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let sum = 0;
    let count =0;
    for(let i=0; sum<n;i++){
        sum+=(26**i)*26;
        count++;
    }
    let str = '';
    let reminder = n;
    while(count>1){
        let temp = reminder % (26**(count-1));
        if(temp===0) temp=26;
        let divide = (reminder - temp) / (26**(count-1));
        if(divide===0) divide=26;
        str = str + array[divide-1];
        reminder -= divide*(26**(count-1));
        count--;
    }
    str = str + array[reminder-1];
    return str;

};
console.log(convertToTitle(200));