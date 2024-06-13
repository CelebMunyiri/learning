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




