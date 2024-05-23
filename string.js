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

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
        if (nextMultipleOfFive - grade < 3) {
            return nextMultipleOfFive;
        } else {
            return grade;
        }
    });
}

//console.log(Math.ceil(73/5)*5-73<3)

function factorialRecursion(num){
    if(num===1){
        return 1;
    }
    return num*factorialRecursion(num-1);

}
console.log(factorialRecursion(5));


function addArrayEle(arr){
    let i=0;
i++;
  if(arr.length===1){
    return arr[0];
  }

    return arr[0]+addArrayEle(arr[i]);
}

//console.log(addArrayEle([2,3,4,5]));

//calculate sum of an array using recursion algorithm

function sumArrayEle(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr[0]+sumArrayEle(arr.slice(1));
}

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(sumArrayEle(arr));

let ar=[1,2,3]
ar.push(4,5)//pushes 4 and 5 to end of array
ar.pop()// removed last element from the array in this case 5
ar.unshift(0)//adds element to beginning of array in this case ar will [0,1,2,3,4]
ar.shift()//removes element from beginning of array in this case 0 SO AR WILL BE [1,2,3,4]
ar1=[6,7,8,9]
ar2=ar.concat(ar1);//returns new array all elements of both arrays
console.log(ar2)
ar3=ar2.slice(3,4);//return array of elementys selected fro, start array
console.log(ar3);




