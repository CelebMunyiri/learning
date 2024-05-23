"use strict";
function longestSubArray(ar){
    let arr=[];
    for(let i=0;i<ar.length;i++){
        if(arr.includes(ar[i]) ==false){
            arr.push(ar[i]);
        }
    }
    return arr;
    }

    let my=['a','b','c','d','e','f','g','a','b','c','d'];

    //console.log(longestSubArray(my));

    //matrix brute force
    function diagonalDifference(arr){
        let sum1=0;
        let sum2=0;
        for(let i=0;i<arr.length;i++){
            sum1+=arr[i][i];
            sum2+=arr[i][arr.length-1-i];
        }
        return Math.abs(sum1-sum2);
    }

    function calculateDifference(ar){
        let t1=0;
        let t2=0;
        for(let i=0;i<ar.length;i++){
t1+=ar[i][i];
t2+=ar[i][ar.length-1-i]

        }
        return Math.abs(t1-t2);
    }

    let arr=[
        [11,2,4],
        [4,5,6],
        [10,8,-12]
    ];

    console.log(calculateDifference(arr));