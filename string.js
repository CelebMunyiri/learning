//string methods

function factorialFunc(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}

//console.log(factorialFunc(5));
let str="Hello";
//console.log(str.repeat(3));

function printStair(n){
    let str="#"
    let space=" ";
    for(let i=1;i<=n;i++){
        console.log(`${space.repeat(n-i)}${str.repeat(i)}${str.repeat(i)}${space.repeat(n-i)}`);
    }
}

//printStair(5)

console.log(str.padEnd(6,'2'));//padEnd adds string at the end
console.log(str.padStart(7,'Yo'));//padstart adds string at the start
let names =' davy     ';
console.log(names.length);
names=names.trim();//trim removes whitespace
console.log(names.length);

let thisStr="Hello World";

console.log(thisStr.substring(0,5));//get a sub string of the string
console.log(thisStr.startsWith("Hello")); //returns a boolean if the string starts with given string ||true
console.log(thisStr.endsWith("Hello")); //returns a boolean if the string ends with given string      ||false
console.log(thisStr.split(" ")); //split the string where there is specified string and return an array of strings after splitting
console.log(thisStr.slice(5,6)); //Extracts a section of the string

///LEETCODE QUIZ(648)[MEDIUM]
//PROBLEM
/*
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

 

Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
 

Constraints:

1 <= dictionary.length <= 1000
1 <= dictionary[i].length <= 100
dictionary[i] consists of only lower-case letters.
1 <= sentence.length <= 106
sentence consists of only lower-case letters and spaces.
The number of words in sentence is in the range [1, 1000]
The length of each word in sentence is in the range [1, 1000]
Every two consecutive words in sentence will be separated by exactly one space.
sentence does not have leading or trailing spaces.
*/

//SOLUTION

function replaceWholeWord(str, wordToReplace, replacementWord) {
    // Create a regular expression with word boundaries
    const regex = new RegExp(`\\b${wordToReplace}\\b`, 'g');
    return str.replace(regex, replacementWord);
}

function approachTwo(s,d){
    let strArray=s.split(" ");
    for(let i=0;i<strArray.length;i++){
        for(let j=0;j<d.length;j++){
            if(strArray[i].includes(d[j])){
                strArray[i]=strArray[i].replace(d[j],d[j]);
            }
        }
    }
    return strArray.join(" ");
}
function createReplacer(wordToReplace, replacementWord) {
    return function (str) {
        const regex = new RegExp(`\\b${wordToReplace}\\b`, 'g');
        return str.replace(regex, replacementWord);
    };
}
function trimDerivativeOfRootStrings(dictionary,sentence){
    let strArray = sentence.split(" ");

    for(let i = 0; i < strArray.length; i++){
        for(let j=0;j<dictionary.length; j++){
            if(strArray[i].includes(dictionary[j])){
               strArray[i]= createReplacer(strArray[i],dictionary[j])
            }
        }
        
    }
    return strArray.join(" ");
}

let dictionary = ["cat","bat","rat"];
let sentence = "the cattle was rattled by the battery";

//console.log(trimDerivativeOfRootStrings(dictionary,sentence));
console.log(approachTwo(dictionary,sentence))



