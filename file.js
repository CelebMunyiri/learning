"use strict"
function countVowels(sentence) {
    let sentense=sentence.toLowerCase();

    let vowels=['a', 'b', 'c', 'd', 'e']

    let vowelsCount=0;

    for(let char of sentense) {
if(vowels.includes(char)) {
    vowelsCount++;
}
    }
return vowelsCount;

}

console.log(countVowels('david'));

function integerReverser(number){
    let numberToReverse=number.toString();
    let reversedNumber=numberToReverse.split('').reverse().join('');

    return parseInt(reversedNumber);

}

console.log(integerReverser(123456789));