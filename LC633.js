/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let sqrt=Math.sqrt(c);
    //if square root is integer return true

    if(sqrt%1===0) return true;

    for(let i=1;i<sqrt;i++){
        let left = c - i*i;
        if(Math.sqrt(left)%1===0) return true;

    }
    /*
    const sqArray = [];
    for(let i=0;i*i<=c;i++){
        sqArray.push(i*i);
    }
    console.log(sqArray);
    for(let i=0;i<sqArray.length;i++){
        let left = c - sqArray[i];
        if(sqArray.includes(left)){
            return true;
        }
    }
    */
    return false;
};
console.log(Math.sqrt(2));