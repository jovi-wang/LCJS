//Hamster me
function hamsterMe(code, message) {
    const alpha='abcdefghijklmnopqrstuvwxyz';
    let temp= code.split('').sort();
    const uniq = [ ...new Set(temp) ];
    //generate divide code book
    const divide=[];
    for(let i=0;i<=uniq.length;i++){
        const left = alpha.indexOf(uniq[i-1])>-1? alpha.indexOf(uniq[i-1]):0;
        const right = alpha.indexOf(uniq[i])>-1? alpha.indexOf(uniq[i]):26;
        divide.push(alpha.substring(left,right));
    }
    //if a is not in the code, push first item to last one
    const last = divide.pop().concat(divide.shift());
    divide.push(last);
    let str='';
    for(let i=0;i<message.length;i++){
        const char = message[i];
        for(let i=0;i<divide.length;i++){
            if(divide[i].indexOf(char)>-1){
                let index=divide[i].indexOf(char)+1;
                str = str + divide[i][0]+index;
            }
        }
    }
    return str;
}
hamsterMe('hamster','helpme');

//Advanced Pig Latin
function translate(sentence) {
   const array=sentence.split(' ');
   return array.map((item)=>translateWard(item)).join(' ');
}

function translateWard(word){
    //check capital
    const capital = word[0]===word[0].toUpperCase();
    if(capital){
        word=word.toLowerCase();
    }
    let temp=word;
    //check punctuation
    let regex = /[^a-z0-9]/i;
    const punctuation = temp.match(regex);

    let lastChar='';
    if(punctuation){
        lastChar = temp.substring(punctuation.index);
        temp = temp.substring(0,punctuation.index);
    }
    //find first vowel
    regex = /[aeiou]/i;
    const result = temp.match(regex);

    if(result){
        const i = result.index;
        //the first char is vowel, add 'way'
        if(i===0){
            temp = temp+'way';
        }
        else{
            temp =  temp.substring(result.index) + temp.substring(0,result.index) + 'ay';
        }
    }
    if(capital){
        temp = temp[0].toUpperCase()+temp.substring(1);
    }
    return temp+lastChar;
}
console.log(translate('How are you?'))