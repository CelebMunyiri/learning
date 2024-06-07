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






