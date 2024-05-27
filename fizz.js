"use strict";
/*
function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        } else if(i%3==0 && i%5!=0){
            console.log("Fizz");
        } else if(i%5==0 && i%3!=0){
            console.log("Buzz");
        } else if(i%3 !=0 && i%5!=0){
            console.log(i);
        }
    }
}

fizzBuzz(15);
let ar=[2,3,4,2,2,4,5,7,5,3];
let arr=['a','f','c','b']
ar=ar.sort();
arr=arr.sort();
//console.log(ar);
//console.log(arr);
function printStaircase(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = ' '.repeat(n - i); 
      let hashes = '#'.repeat(i); 
      console.log(spaces + hashes);
    }
  }
  
  // Example usage:
  const height = 5;
  //printStaircase(height);

  function maximaAndMinima(arr){
    let max=0;
    let min=0;
    let sortedArray=arr.sort();
    for(let i=arr.length-1; i>=arr.length-4; i--){
max+=sortedArray[i]

    }
    for(let i=0; i<=3; i++){
        min+=sortedArray[i]
        
            }

            console.log(`${min}  ${max}`);
            console.log(Math.max(...sortedArray));
  }

  maximaAndMinima([1,2,3,4,5])

  /////
  'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    // Add methods here
    url;
    height;
    width;
    constructor(url, size){
        this.url = url;
        this.height = size.height;
        this.width = size.width
        console.log(size)
    }
    getUrl(){
        return this.url;
    }
    setUrl(url){
        this.url =  url;
    }
    setSize(width,height) {
        this.width = width;
        this.height = height;
    }
    getSize(){
        return new Size(this.width, this.height)
    }
    cloneImage(){
        return new Image(this.url, new Size(this.width, this.height))
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    let images = [];
    
    let numberOfImages = parseInt(readLine().trim());
    
    while (numberOfImages-- > 0) {
        let inputs = readLine().trim().split(' ');
        images.push(new Image(inputs[0], new Size(parseInt(inputs[1]), parseInt(inputs[2]))));
    }

    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        let inputs = readLine().trim().split(' ');
        const image = images[parseInt(inputs[1]) - 1];
        const operation = inputs[0];
        
        switch(operation) {
            case 'Clone':
                images.push(image.cloneImage());
                break;
            case 'UpdateUrl':
                image.setUrl(inputs[2]);
                break;
            case 'UpdateSize':
                image.setSize(parseInt(inputs[2]), parseInt(inputs[3]));
                break;
            default:
                break;
        }
    }
    
    images.forEach((img) => {
        const size = img.getSize();
        ws.write(`${img.getUrl()} ${size.width} ${size.height}\n`);
    })
}

//////

class ParkingLot {
    constructor(parkingSize) {
      this.slots = new Array(parkingSize).fill(null);
    }
  
    park(carId) {
      console.log(`Parking car: ${carId}`);
      if (this.slots.every((slot) => slot !== null)) {
        return false;
      }
  
      for (let i = 0; i < this.slots.length; i++) { // Corrected the loop condition
        const slot = this.slots[i];
  
        if (slot === null) {
          this.slots[i] = carId;
          return true;
        }
      }
      return false; // Added a return statement in case all slots are full
    }
  
    remove(carId) {
      console.log(`Leaving car: ${carId}`);
      if (!this.slots.includes(carId)) { // Changed the logic to check if carId exists in slots
        return false;
      }
  
      for (let i = 0; i < this.slots.length; i++) { // Corrected the loop condition
        const slot = this.slots[i];
  
        if (slot === carId) {
          this.slots[i] = null;
          return true;
        }
      }
      return false; // Added a return statement in case carId is not found
    }
  
    getSlots() {
      console.log(`Parking slots: ${this.slots}`);
      return this.slots;
    }
  
    getSize() {
      console.log(`Parking size is: ${this.slots.length}`);
      return this.slots.length;
    }
  
    getAvailable() {
      const availableSlots = this.slots.filter((s) => s === null).length;
      console.log(`Available parking slots: ${availableSlots}`);
      return availableSlots;
    }
  
    isFull() {
      return this.getAvailable() === 0;
    }
  }
  
  // Example usage:
  const parkingLot = new ParkingLot(5);
  parkingLot.park('CAR-10');
  parkingLot.park('CAR-20');
  parkingLot.park('CAR-30');
  parkingLot.getSlots();
  parkingLot.remove('CAR-20');
  parkingLot.getSlots(); */


  //functionn gcd and lcm

  function getLCMandGCD(a,b){
    let range=a[0]*a[1];
let lcmVals=[]
    for(let i=a[0];i<=range;i++){
      if(i%a[0]==0 && i%a[1]==0){
lcmVals.push(i);
    }
   // console.log(lcmVals);
  }
  let gcdVals=[]
  for(let i=lcmVals[0];i<=lcmVals[lcmVals.length-1];i++){
    if(b[0]%i==0 && b[1]%i==0){
      gcdVals.push(i); 
    }
  }
  //console.log(gcdVals);
  return gcdVals.length;

  }

  //console.log(getLCMandGCD([2,4],[16,32,96]));
  let a='6';
  let b=6;
  let c=a+b;
  //console.log(b==a);

  function timeConversion(s) {
    // Write your code here
    const millitaryTime=s.slice(0,-2);

    
    let hours=parseInt(millitaryTime.slice(0,2));
    let minutes=parseInt(millitaryTime.slice(3,5));
    let seconds=parseInt(millitaryTime.slice(6,8));
    let meridiem=s.slice(-2);
    if(meridiem=='PM' && hours!=12){
      hours+=12;
    } else if(meridiem=='AM' && hours==12){
      hours-=12;
    }
    if(hours<10){
      hours='0'+hours;
    }
    if(minutes<10){
      minutes='0'+minutes;
    }
    if(seconds<10){
      seconds='0'+seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  

}

//Breaking Records

function breakRecords(scores){
  let highestScore=scores[0];
  let lowestScore=scores[0];

  let rBreak=0;
  let failRBreak=0;

  for(let i=1;i<=scores.length;i++){
    if(scores[i]>highestScore){
      highestScore=scores[i];
      rBreak+=1;
    } else if(scores[i]<lowestScore){
      lowestScore=scores[i];
      failRBreak+=1;
    }
  }
  return [rBreak,failRBreak];
}

//console.log(breakRecords([2,3,4,5]));

//PIVOT INDEX LEET CODE QUIZ
/*Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 

Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/ */

//Solulu

function pivotIndex(nums){
  let totalSum=nums.reduce((acc,num)=>acc+num,0)
  let lSum=0;
for(let i=0;i<nums.length;i++){
  
 
  if(lSum===totalSum-lSum-nums[i]){
    return i;
  } 
  lSum+=nums[i];
  
}

}

//console.log(pivotIndex([1,7,3,6,5,6]));

//share chocolate bar

function chocolateFeast(s, d, m) {

  let count=0;
  for(let i=0;i<s.length;i++){
    for(let j=i+1;j<=i+m;j++){
      if(s[i]+s[j]==d){
        count += 1;
      }
    }
  }
  return count;
    
}

//console.log(chocolateFeast([2,2,1,3,2],4,2));


//return an array such that each element at index i of new array is product of all the numbers in the original  array except the one at i

function productArray(arr){
  let newAr=[];
  
  for(let i=0;i<arr.length;i++){
   let rest= [...arr.slice(0,i),...arr.slice(i+1)]

   const product = rest.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
   
console.log(`${rest}===${i}`);
       
   newAr.push(product);
  }
 
  return newAr;

}

console.log(productArray([1,2,3,4,5]));







  

