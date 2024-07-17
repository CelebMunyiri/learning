/* class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(data){
        this.head=null;
       
    }

    append(data){
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
        } else{
            let current=this.head;

            while(current.next){
                current=current.next;
            }
current.next=newNode;
        }
    }
    print(){
        
    }
}



//LeetCode QUIz n Solulu
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

//Explanation
/*To solve this problem of adding two numbers represented by linked lists where digits are stored in reverse order, we need to iterate through both linked lists simultaneously, digit by digit. We also need to manage the carry that may result from the addition of two digits.

Here's a step-by-step solution along with the implementation:

Create a new linked list to store the result.
Iterate through both linked lists:
Add the corresponding digits along with any carry from the previous addition.
If the sum is 10 or more, keep the carry for the next iteration and store the remainder (sum % 10) in the new node.
Move to the next nodes in both lists.
Handle the remaining carry after the iteration.
Return the head of the resultant linked list. 

//Solution
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head for the resultant linked list
    let current = dummyHead;
    let carry = 0;

    // Loop through both lists until both lists end
    while (l1 !== null || l2 !== null) {
        // Get the values from the current nodes, if present
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;

        // Calculate the sum and the carry
        let total = carry + x + y;
        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);

        // Move to the next nodes in the lists
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there is a remaining carry, add a new node with the carry value
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    // The result linked list is dummyHead.next
    return dummyHead.next;
} 
*/


///learning
///SIMPLE LINKED LISTS IN JAVASCRIPT

//List node
class Listnode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

//Linked List
class Linkedlist{
    constructor(head=null){
this.head = head;
    }
}

//example
let node1 = new Listnode(2);
let node2 = new Listnode(5);
let node3= new Listnode(6);
node1.next=node2;

node2.next=node3;

let listt = new Linkedlist(node1)

console.log(node2.next.data)
console.log(listt)
