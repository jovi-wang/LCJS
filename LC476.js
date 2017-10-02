/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2);
    let out='';
    for(let i=0;i<binary.length;i++){
        console.log(binary.charAt(i))
        if(binary.charAt(i)==='1'){
            out = out + '0';
        }else{
            out = out + '1';
        }
    }
    // while(out.startsWith('0')){
    //     out = out.substring(1);
    // }
    return parseInt(out,2);

};
console.log(findComplement(5))
