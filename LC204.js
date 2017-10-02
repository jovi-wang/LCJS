/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primesArray=[];
    for(let i=2;i<n;i++){
        if(isPrime(i)) primesArray.push(i);
    }
    return primesArray.length;
};

const isPrime = function(n) {
  for(let i=2;i<=Math.sqrt(n);i++){
      if(n%i===0) return false;
  }
  return true;
};
