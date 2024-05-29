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
  
   
// console.log(`${rest}===${i}`);
       
   newAr.push(product);
  }
 
  return newAr;

}

//console.log(productArray([3,2,1]));

///FUNCTION TO REVERSE VOWELS OF A STRING
var reverseVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      while (left < right && !vowels.has(arr[left])) {
          left++;
      }
      while (left < right && !vowels.has(arr[right])) {
          right--;
      }
      if (left < right) {
          [arr[left], arr[right]] = [arr[right], arr[left]];
          left++;
          right--;
      }
  }

  return arr.join('');
};

//Finding Difference of Arrays

function findDifference(nums1,nums2){
  
  let l1=[];
  let l2=[];

  for(let i=0;i<nums1.length;i++){
    if(nums2.includes(nums1[i])==false){
l1.push(nums1[i]);
    }
  }

  for(let i=0;i<nums2.length;i++){
    if(nums1.includes(nums2[i])==false){
l2.push(nums2[i]);
    }
  }

  return [l1,l2];

}

//console.log(findDifference([1,2,3],[2,4,6]))

// migratoryBirds hackerrank quiz

function migratoryBirds(arr) {
  // Write your code here
  let count=0;
  let maxCount=0;
  let maxBird=0;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
        count+=1;
        console.log(count);
      }
    }
    if(count>maxCount){
      maxCount=count;
      maxBird=arr[i];
    }
    count=0;
  }
  return maxBird;
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));

///eficint answer for migratoryBirds 
function migratoryBirds(arr) {
  // Create an array to count occurrences of each bird type.
  const frequency = new Array(6).fill(0); // Bird IDs are between 1 and 5, so we need an array of size 6.

  // Count the frequency of each bird type.
  for (let i = 0; i < arr.length; i++) {
      frequency[arr[i]]++;
  }

  // Find the bird type with the highest frequency.
  let maxCount = 0;
  let maxBird = 0;
  for (let i = 1; i <= 5; i++) { // Only iterate through possible bird IDs (1 to 5)
      if (frequency[i] > maxCount) {
          maxCount = frequency[i];
          maxBird = i;
      } else if (frequency[i] === maxCount && i < maxBird) {
          maxBird = i;
      }
  }

  return maxBird;
}

//////////////
/*
Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

Divisible by 400.
Divisible by 4 and not divisible by 100.
Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is .

Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer
Input Format

A single integer denoting year .

Constraints

1700 \le y \le 2700
Output Format

Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

Sample Input 0

2017
Sample Output 0

13.09.2017
Explanation 0

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

Sample Input 1

2016
Sample Output 1

12.09.2016
Explanation 1

Year  = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017. When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September). We then print the full date in the specified format, which is 12.09.2016.

Sample Input 2

1800
Sample Output 2

12.09.1800
Explanation 2

Since 1800 is leap year as per Julian calendar. Day lies on 12 September.

*/
//SOLUTION
function dayOfProgrammer(year) {
  // Write your code here
  if (year === 1918) {
      // Special case for the year 1918
      return "26.09.1918";
  } else if ((year < 1918 && year % 4 === 0) || 
             (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))) {
      // Leap years in Julian (before 1918) and Gregorian (after 1918)
      return `12.09.${year}`;
  } else {
      // Non-leap years
      return `13.09.${year}`;
  }

}

//GCD OF STRINGS












  

