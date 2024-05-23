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