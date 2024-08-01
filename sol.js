"use strict";
/* let head;
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
       
    }
}

function reverse(node){
    let prev=null;
    let current=node;
    let next=null;

    while(current !=null){
        next=current.next;
        current.next=prev;
       prev=current;
       current=next;
    }
    node=prev;
    //return node;
    console.log(node);
}

function printList(node){
while(node !=null){
    console.log(node.data + " ");
    node=node.next;
}
}

head = new Node(85);
        head.next = new Node(15);
        head.next.next = new Node(4);
        head.next.next.next = new Node(20);

        // document.write("Given linked list<br/>");
        // printList(head);
        // head = reverse(head);
        // document.write("<br/>");
        // document.write("Reversed linked list<br/> ");
        printList(head);
        reverse(head);

   */     

//


// function returnHighestAltitude(gain){
//     let altitudes = gain.map(function(altitude){
//         return altitude + altitudes.reduce(function(previous, current){
//             return Math.max(previous, current);
//         }, 0);
//     });
//     return altitudes;
// }

//PROBLEM

function returnHighestAltitude(gain){
    let altitude=[0]
    for(let i=0;i<gain.length;i++){
        altitude[i+1]=altitude[i]+gain[i]
        console.log(altitude)
    }

    let largest = altitude[0];
    
    for (let i = 1; i < altitude.length; i++) {
        if (altitude[i] > largest) {
            largest = altitude[i];
        }
    }
    
    return largest;
}

let list=[-5,1,5,0,-7]
//console.log(returnHighestAltitude(list))


// SORTING ARRAY BY INCREASING FREQUENCY

function sortArrayByFrequency(arr){
    let frequencyMap = new Map();

    // Count the frequency of each element
    for(let i = 0; i < arr.length; i++){
        if(frequencyMap.has(arr[i])){
            frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
            console.log(frequencyMap)
        } else {
            frequencyMap.set(arr[i], 1);
        }
    }

    // Sort the elements based on their frequency
    let sortedArray = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

    // Extract the elements from the sorted array
    let result = [];
    for(let [element, frequency] of sortedArray){
        for(let i = 0; i < frequency; i++){
            result.push(element);
        }
    }

    return result.reverse();
}

let input = [1,1,2,2,2,3]

console.log(sortArrayByFrequency(input))

