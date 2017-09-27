/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //combination problem choose p from k
    const k = m+n-2;
    const p = m<n? m-1: n-1;
    return factorial(k)/(factorial(p)*factorial(k-p));
    // return combination(k,p);
};
const factorial= function(n){
    if(n===0){
        return 1;
    }
    let i= n;
    while(--i){
        n*= i;
    }
    return n;
};

const combination = (n,k)=>{
    if (n===0){
        return 1;
    }
    let up = 1;
    let down = 1;
    for(let i=1;i<=k;i++,n--){
        down *= i;
        up *=n;

    }
    return up/down;
};

console.log(combination(0,1))