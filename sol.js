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
    let orderMap = new Map();

    // Count the frequency of each element and track their first appearance order
    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap.has(arr[i])) {
            frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
        } else {
            frequencyMap.set(arr[i], 1);
            orderMap.set(arr[i], i);
        }
    }

    // Sort the elements based on their frequency and first appearance order
    let sortedArray = [...frequencyMap.entries()].sort((a, b) => {
        if (b[1] === a[1]) {
            return orderMap.get(a[0]) - orderMap.get(b[0]);
        }
        return b[1] - a[1];
    });

    // Extract the elements from the sorted array
    let result = [];
    for (let [element, frequency] of sortedArray) {
        for (let i = 0; i < frequency; i++) {
            result.unshift(element);
        }
    }

    return result;
}

let input = [1,1,2,2,2,3]
let input2=[1,5,0,5]

console.log(sortArrayByFrequency(input))
console.log(sortArrayByFrequency(input2))

//
function canVisitAllRooms(rooms){
    let visited = new Set();
     function dfs(room){
        visited=visited.add(room);
        for(let next of rooms[room]){
            if(!visited.has(next)){
                dfs(next);
            }
        }
     }

     dfs(0)

     return visited.size===rooms.length;
}

let rooms=[[1],[2],[3],[0]]
//console.log(canVisitAllRooms(rooms));


function isSubsequence(s,t){
    // let newS=[]
    // let string=t.split('');
    // let subString=s.split('');

    // for(let i=0;i<string.length;i++){
    //     for(let j=0;j<subString.length;j++){
    //         if(string[i]==subString[j]){
    //             newS.push(string[i])
                
    //         }
    //         if(string[i] !==subString[j]){
    //             string.splice(i-1,i)
    //         }
    //     }
    // }

    // return newS.toString()==s

    let i=0;
    let j=0;

    let string=t.split('');
    let subString=s.split('');

    for(let m=0;m<string.length;m++){
        for(let n=0;n<subString.length;n++){
            if(string[m]==subString[n]){
                i+=1;
            }else{
                j+=1
            }
        }
    }

    return i==subString.length;

}

//sol b

function isSubsequence(s, t) {
    let i = 0; // Pointer for s
    let j = 0; // Pointer for t
  
    while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
        i++; // Move i only when characters match
      }
      j++; // Always move j to check the next character in t
    }
  
    return i === s.length; // If i reaches the end of s, s is a subsequence of t
  }
  
  // Example 1
  let s1 = "abc";
  let t1 = "ahbgdc";
  console.log(isSubsequence(s1, t1)); // Output: true
  
  // Example 2
  let s2 = "axc";
  let t2 = "ahbgdc";
  console.log(isSubsequence(s2, t2)); // Output: false



console.log(isSubsequence('abc','ahbgdc'))