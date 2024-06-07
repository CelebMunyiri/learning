"use strict";

const fruits = ["Mango","Orange","Apple","Banana"];

console.log(fruits);
let fruit=fruits.at(2);
console.log(fruit);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);
console.log(fruits.copyWithin(2,0));
console.log(children.copyWithin(1,2));


function gcdLcm(arr1,arr2){
    
}

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
///Testing use of .reduce() array method

const nums= [1,2,3,4,5]

const sum = nums.reduce((a,b)=>a+b,20);
console.log(sum);

//LEETCODE EASY PROBLEM
/*
Given an array of integers nums, calculate the pivot index of this array.

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
 
*/

let array = [1,7,3,6,5,6]
function pivotIndex(arr){
let sum = arr.reduce((a,b)=>a+b,0)
let lsum = 0;

for(let i=0; i<arr.length;i++){
if(lsum === sum-lsum-arr[i]){
    return i;
}
lsum += arr[i]

}


    return -1;

}

console.log(pivotIndex(array));