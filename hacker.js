"use strict";

function gcd(a, b) {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getTotalX(a, b) {
    let lcmValue = a[0];
    let gcdValue = b[0];

    // Calculate the LCM of elements in array a
    for (let i = 1; i < a.length; i++) {
        lcmValue = lcm(lcmValue, a[i]);
    }

    // Calculate the GCD of elements in array b
    for (let i = 1; i < b.length; i++) {
        gcdValue = gcd(gcdValue, b[i]);
    }

    let count = 0;
    let multipleOfLcm = lcmValue;
    while (multipleOfLcm <= gcdValue) {
        if (gcdValue % multipleOfLcm === 0) {
            count++;
        }
        multipleOfLcm += lcmValue;
    }

    return count;
}

// Example usage:
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b));  // Output: 3

//PAGES PROBLEM
/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:

image

When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .

Example



Untitled Diagram(4).png

Using the diagram above, if the student wants to get to page , they open the book to page , flip  page and they are on the correct page. If they open the book to the last page, page , they turn  page and are at the correct page. Return .

Function Description

Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

int n: the number of pages in the book
int p: the page number to turn to
Returns

int: the minimum number of pages to turn
Input Format

The first line contains an integer , the number of pages in the book.
The second line contains an integer, , the page to turn to.

Constraints

Sample Input 0

6
2
Sample Output 0

1
Explanation 0

If the student starts turning from page , they only need to turn  page:

Untitled Diagram(6).png

If a student starts turning from page , they need to turn  pages:

Untitled Diagram(3).png

Return the minimum value, .

Sample Input 1

5
4
Sample Output 1

0
Explanation 1

If the student starts turning from page , they need to turn  pages:

Untitled Diagram(4).png

If they start turning from page , they do not need to turn any pages:

Untitled Diagram(5).png

Return the minimum value, .
*/
//solution1 ==Not efficient
function pageCount(n, p) {
    while(1<n,p<100000)
        {
    let count = 0;
    if (p === 1 || p === n) {
        return 0;
    } else if (p < n / 2) {
        count =1;
        for (let i = 1; i < p; i++) {
            if (i % 2 === 0) {
                count++;
            }
        }
    } else {
        for (let i = n; i > p; i--) {
            if (i % 2 === 0) {
                count++;
            }
        }
    }
    return count;
}
}

//solution2 == efficient
function pageCount(n, p) {
    // Calculate the number of turns from the front
    const turnsFromFront = Math.floor(p / 2);
    
    // Calculate the number of turns from the back
    const turnsFromBack = Math.floor(n / 2) - Math.floor(p / 2);
    
    // Return the minimum of the two
    return Math.min(turnsFromFront, turnsFromBack);
}


///HACKER RANK AVID HIKER
//THe PROBLEM
/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example

 

The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.

Constraints

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley. */

//SOLUTION
function countingValleys(steps,path){

    let valleys = 0; // Counter for the number of valleys
    let altitude = 0; // Current altitude, starting at sea level
    let inValley = false; // Flag to track if the hiker is currently in a valley

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
        } else if (path[i] === 'D') {
            altitude--;
        }

        // Check if we just entered a valley
        if (altitude < 0 && !inValley) {
            inValley = true;
        }

        // Check if we just exited a valley
        if (altitude === 0 && inValley) {
            valleys++;
            inValley = false;
        }
    }

    return valleys;
}

///PROBLEM
/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

Example



The person can buy a , or a . Choose the latter as the more expensive option and return .

Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
Returns

int: the maximum that can be spent, or  if it is not possible to buy both items
Input Format

The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
The second line contains  space-separated integers , the prices of each keyboard model.
The third line contains  space-separated integers , the prices of the USB drives.

Constraints

The price of each item is in the inclusive range .
Sample Input 0

10 2 3
3 1
5 2 8
Sample Output 0

9
Explanation 0

Buy the  keyboard and the  USB drive for a total cost of .

Sample Input 1

5 1 1
4
5
Sample Output 1

-1
Explanation 1

There is no way to buy one keyboard and one USB drive because , so return .
*/
//SOLUTION
function getMoneySpent(keyboards, drives, b){
    let maxSpent = -1;  
    
    
    for (let i = 0; i < keyboards.length; i++) {
        
        for (let j = 0; j < drives.length; j++) {
            let totalCost = keyboards[i] + drives[j];  
            if (totalCost <= b && totalCost > maxSpent) {
                maxSpent = totalCost;  
            }
        }
    }
    
    return maxSpent;
}


let arr=[]
let index=7

if(arr.length == index-1 || arr.length == 0){
    console.log("Munyiri")
}

///
//PROBLEM
/*
Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given  queries in the form of , , and  representing the respective positions for cats  and , and for mouse . Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

If cat  catches the mouse first, print Cat A.
If cat  catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
Example




The cats are at positions  (Cat A) and  (Cat B), and the mouse is at position . Cat B, at position  will arrive first since it is only  unit away while the other is  units away. Return 'Cat B'.

Function Description

Complete the catAndMouse function in the editor below.

catAndMouse has the following parameter(s):

int x: Cat 's position
int y: Cat 's position
int z: Mouse 's position
Returns

string: Either 'Cat A', 'Cat B', or 'Mouse C'
Input Format

The first line contains a single integer, , denoting the number of queries.
Each of the  subsequent lines contains three space-separated integers describing the respective values of  (cat 's location),  (cat 's location), and  (mouse 's location).

Constraints

Sample Input 0

2
1 2 3
1 3 2
Sample Output 0

Cat B
Mouse C
Explanation 0

Query 0: The positions of the cats and mouse are shown below: image

Cat  will catch the mouse first, so we print Cat B on a new line.

Query 1: In this query, cats  and  reach mouse  at the exact same time: image

Because the mouse escapes, we print Mouse C on a new line.
*/
//SOLUTION

function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);
    
    if (catA < catB) {
        return 'Cat A';
    } else if (catA > catB) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}

//HACKERRANK EXTRA CHALLENGE
//MAGIC SQUARES
/*
We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range .

Example

$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:

5 3 4
1 5 8
6 4 2
We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2
This took three replacements at a cost of .

Function Description

Complete the formingMagicSquare function in the editor below.

formingMagicSquare has the following parameter(s):

int s[3][3]: a  array of integers
Returns

int: the minimal total cost of converting the input square to a magic square
Input Format

Each of the  lines contains three space-separated integers of row .

Constraints

Sample Input 0

4 9 2
3 5 7
8 1 5
Sample Output 0

1
Explanation 0

If we change the bottom right value, , from  to  at a cost of ,  becomes a magic square at the minimum possible cost.

Sample Input 1

4 8 2
4 5 7
6 1 6
Sample Output 1

4
Explanation 1

Using 0-based indexing, if we make

-> at a cost of 
-> at a cost of 
-> at a cost of ,
then the total cost will be .
*/

//SOLUTION
function formingMagicSquare(s) {
    // Write your code here
     const allMagicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];

    let minCost = Infinity;

    for (let magicSquare of allMagicSquares) {
        let cost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - magicSquare[i][j]);
            }
        }
        if (cost < minCost) {
            minCost = cost;
        }
    }

    return minCost;

}

//ANOTHER HACKER RANK PROBLEM
/*
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

Example


There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

Function Description

Complete the pickingNumbers function in the editor below.

pickingNumbers has the following parameter(s):

int a[n]: an array of integers
Returns

int: the length of the longest subarray that meets the criterion
Input Format

The first line contains a single integer , the size of the array .
The second line contains  space-separated integers, each an .

Constraints

The answer will be .
Sample Input 0

6
4 6 5 3 3 1
Sample Output 0

3
Explanation 0

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e.,  and ), so we print the number of chosen integers, , as our answer.

Sample Input 1

6
1 2 2 3 1 2
Sample Output 1

5
Explanation 1

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e., , , and ), so we print the number of chosen integers, , as our answer.

Language
JavaScript (Node.js)
More
12345678910111213141516171819
Line: 50 Col: 1

Test against custom input
Blog
*/
//SOLUTION
//SOLUTION EXPLANATION
/*
Frequency Array:

We create an array frequency of size 101, initialized with zeros to cover all numbers from 0 to 100.
We iterate over the input array a and increment the corresponding index in the frequency array for each number.
Calculate Maximum Length:

We iterate through the frequency array from index 1 to 100.
For each index i, we calculate the sum of frequency[i] and frequency[i-1], which represents the length of the subarray formed by elements i and i-1.
We update maxLength with the maximum value found during the iteration.
This implementation ensures that we efficiently find the longest subarray that meets the given criterion by leveraging the frequency of elements and considering pairs of consecutive integers.
*/
function pickingNumbers(a) {
    // Step 1: Count the frequency of each number in the array
    const frequency = new Array(101).fill(0); // Given that 1 <= a[i] <= 100, we need 101 slots
    a.forEach(number => {
        frequency[number]++;
    });

    // Step 2: Find the maximum length of subarray with elements having a difference of at most 1
    let maxLength = 0;
    for (let i = 1; i <= 100; i++) {  // Check pairs (i, i+1)
        const currentLength = frequency[i] + frequency[i - 1];
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

// Example usage
const a1 = [4, 6, 5, 3, 3, 1];
const a2 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(a1));  // Output: 3
console.log(pickingNumbers(a2));  // Output: 5





