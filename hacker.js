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




