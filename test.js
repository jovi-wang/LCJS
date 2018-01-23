
function bouncingBall(h,  bounce,  window) {
  // your code here
    if(h<=0 || bounce<=0 ||bounce>=1 || window>=h) return -1;

    let temp = window/h+1;
    let cnt= Math.log(temp)/Math.log(bounce);

    return Math.flooroor(cnt)*2+1;

// console.log(bouncingBall(30, 0.9999999999, 1))
function openOrSenior(data){
    /*
    const out=[];
    for(let i=0;i<data.length;i++){
        if (data[i][0]>=55 && data[i][1]>7) out.push('Senior');
        else out.push('Open')
    }
    return out;
    */
    
    function member(item){
        return (item[0]>=55 && item[1]>7)? 'Senior': 'Open';
    }
    return data.map(member);
}

// console.log(openOrSenior([[57,12],[12,5]]))


function race(v1, v2, g) {
    // your code
    if(v1>=v2) return null;
    const time = Math.floor(3600*g/(v2-v1));
    const h= Math.floor(time/3600);
    const m = Math.floor((time%3600)/60);
    const s= (time%3600)%60;
    return [h,m,s];
}

// console.log(race(720, 850, 70))
// console.log(32*60+18)

const binaryArrayToNumber = arr => {
  // your code
  //   return parseInt(arr.join(''),2);
    return arr.reduce( (a, b) => a << 1 | b );
    
};
// console.log(parseInt([0, 0, 0, 1].join(''),2))

//write a method re count number of a e i o u, given a string
function getCount(str) {
  // return str.replace(/[^aeiou]/gi, '').length;
   return (str.match(/[aeiou]/ig)||[]).length;
}
// console.log(getCount('67s'));

var number = function(busStops){
    let sum=0;
    busStops.forEach((item)=>{
     sum += item[0]-item[1];
  });
    return sum;
    
    // busStops.reduce((rem, [on, off]) => rem + on - off, 0);
  
};
//order("is2 Thi1s T4est 3a")=== "Thi1s is2 3a T4est"
function findLongest(array){
  // code here
    let max=0;
    array.forEach((item)=>{
        max=Math.max(max,String(item).length);
    });
    let out;
    for(let item of array){
       if(String(item).length===max){
        out = item;
    break;
        }
    }
    return out;
    
    /*
    array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
     */
    
}
// let a=12;
// console.log(String(a)===`${a}`)

//gap in prime
const isPrime=(n)=>{
  for(let i=2;i<=Math.sqrt(n);i++){
      if(n%i===0) return false;
  }
  return true;
};
function gap(g, m, n) {
    let out=null;
    for(let i=m;i<=n;i++){
        //find 2 prime with the gao g
        if(isPrime(i) && isPrime(i+g)) {
            // console.log(i,i+g)
            let bool=false;
            //make sure between them does not contain prime number
           for(let j=i+1;j<i+g;j++){
                // console.log(j)
               bool=bool||isPrime(j);
               if(bool) break;
           }
           if(!bool){
               out=[i,i+g];
              return out;
           }
           
        }
    }
    
   return out;
}
// console.log(gap(8,300,400))
// console.log(gap(6,100,110))

function tribonacci(signature,n){
    signature=[1,1,1];
    n=1;
  
  const out=[];
  
  for(let i=0;i<signature.length&& i<n;i++){
      out.push(signature[i]);
  }
  console.log(out)
   for(let i=3;i<n;i++){
        let temp=out[i-1]+out[i-2]+out[i-3];
        out.push(temp);
  }
  
  return out;
    
    /*
    for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
  
     */
}

//find highest number and lowest in integer array
function highAndLow(numbers){
  // ...
    const array = numbers.split(' ').map((item)=>{return parseInt(item)});
    array.sort((a,b)=>{return a-b});
    const max = array.pop();
    const min = array.shift();
    console.log(max,min)
    return `${max} ${min}`;
    
    /*  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  Math.max.apply can be simplified
  var max = Math.max(...arr);
  */
}

// highAndLow("42 42");
//Vasya-Clerk
function tickets(peopleInLine){
    peopleInLine=[25,50,25,100,25,50,25,100,25,50,25,100];
    if(peopleInLine.length===0) return 'YES';
    if(peopleInLine[0]!==25) return 'NO';
    let sum=0;
  for(let i=0;i<peopleInLine.length;i++){
      let item=peopleInLine[i];
      switch (item){
          case 25:
              sum+=25;
              break;
          case 50:
              sum-=25;
              break;
          case 100:
              sum-=75;
              break;
      }
      console.log(sum,item)
      if(sum<0){
          return 'NO';
      }else {
          sum+=item===25? 0:25;
      }
  }
  return 'YES';
}
// tickets()

let n= 89,p=1;
//easyly get all digit from a big number
let array=String(n).split('').map(Number);
// let sum=array.reduce((a,b)=>{return a+b**(p++)},0);
let sum=array.reduce((a,b,i)=>a + Math.pow(b, p + i),0);
// console.log(sum,array)


function encrypt(text, n) {
     if(n<=0 || !text) return text;
     else{
         let front='',end='';
         for(let i=0;i<text.length;i++){
             if(i%2===0){
                 end+=(text[i]);
             }else {
                 front+=(text[i]);
             }
         }
         console.log(front.length,end.length)
         return encrypt(front+end,n-1);
        
     }
     
}
/*
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    */
// console.log(encrypt("This is a test!", 2))

function decrypt(encryptedText, n) {
    if(n<=0 || !encryptedText) return encryptedText;
    else {
        let half = Math.floor(encryptedText.length/2);
        let front = encryptedText.substr(0,half);
        let end = encryptedText.substr(half);
        let res='';
        for(let i=0;i< encryptedText.length;i++){
            let index=Math.floor(i/2);
            // console.log(index);
            if(i%2===0){
                 res+=end[index];
             }else {
                 res+=front[index];
             }
        }
        return decrypt(res,n-1);
    }
}

// console.log(decrypt(' Tah itse sits!',3))

// let a = "The quick brown fox jumps over the lazy dog.".toLowerCase().match(/[a-z]/g);
// console.log(a)
// console.log(new Set(a).size);
function deleteNth(arr,x){
  const cnt={};
  const out=[];
  for(let item of arr){
      cnt[item] = cnt[item]>0? cnt[item]+1:1;
      if(cnt[item]<=x) out.push(item);
  }
  return out;
    
    /*
    var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
  */
}

class God{
/**
 * @returns Human[]
 */
  static create(){
    return [ new Man('Adam'), new Woman('Eve') ]
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}


let str='abdeIOjs0';
let str2=str.replace(/[aeiou]/gi,'!');

// console.log('!234!sd'.replace(/!/g,'')+'!')
//`${s.replace(/!/g,'')}!`
let sign='/';
// console.log(parseFloat('a'))
const obj={
'+':(a,b)=>{return a+b},
'-':(a,b)=>{return a-b},
'*':(a,b)=>{return a*b},
'/':(a,b)=>{return a/b},
};
// console.log(obj[sign](1,2))
// console.log(Number.isNaN(Number('b')))

// console.log(+(2*7.33).toFixed(1))
// console.log(' '.charCodeAt(0))
//string to array
// let str3='absd';
// console.log([...str3],str3.split(''))
let temp=';]';
// console.log(temp.startsWith(')'))
arr=[':D',':~)',';~D',':)'];
temp = arr.reduce((a,i)=>{
 if(i.length===2) {
  if(i.startsWith(':') || i.startsWith(':'))
    if(i.endsWith('D') || i.endsWith(')'))
      return a+1;
 }
if(i.length===3) {
  if(i.startsWith(':') || i.startsWith(':'))
    if(i.endsWith('D') || i.endsWith(')'))
      if(i.includes('-') || i.includes('~'))
      return a+1;
 }

return a;
  },0);
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
// arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;


num=12304;
temp = String(num).split('');
temp = temp.map((element,index)=>element*Math.pow(10,temp.length-index)).filter((element)=>element>0).join('+');
// console.log(temp)

number=1.4954545;
let index=String(number).indexOf('.');
  if(index>-1){
    number = String(number)[index+1]>0? number+1: number
  }
  // console.log(number)
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

function duplicateEncode(word){
    const cnt= {};
    for(let i=0;i<word.length;i++){
        let element = word[i].toLowerCase();
        cnt[element] = (cnt[element]||0) + 1;
    }
    let out='';
    for(let i=0;i<word.length;i++){
        let element = word[i].toLowerCase();
        
        out+= cnt[element]>1? ')':'(';
    }
    return out;
    /*
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
     */
    
}

function chained(functions) {
    return function(input){
        let temp=input;
        functions.forEach((element)=>{
        temp=element(temp);
        });
        return temp;
    
    }
    
}
function chained2(functions) {
  return function(input){
    return functions.reduce((input, fn)=>fn(input), input);
  }
}
/*
chained([a,b,c,d])(input)
d(c(b(a(input))))
*/
temp=[1,2,3,4];
// console.log(temp.slice(-3))
function Fibonacci(input,out,n){
    
    if(out.length===n){
        return out.push(input[0]+input[1]);
    }else {
        return Fibonacci(out.slice(-2),out,n)
    }
}
function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++)
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  return sig.slice(0, n);
}
//Dashatize it
function dashatize(num) {
   return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
   
    //return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
 
};
console.log('12234'.match(/[13579]|[02468]+/g))
