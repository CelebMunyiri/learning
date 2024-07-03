"use strict";

class Queue{
    constructor(){
        this.items={};
        this.frontIndex=0;
        this.backIndex=0;
    }
    enqueue(item){
this.items[this.backIndex]=item;
this.backIndex++;
return item + ` inserted`;
    }

    dequeue(){
        const item=this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    peek(){
        return this.items[this.frontIndex];
    }

    getPrintQueue(){
        return this.items;
    }
}

const queue = new Queue();

console.log(queue.enqueue(7));
console.log(queue.enqueue(2));
console.log(queue.enqueue(6));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue.peek());
let str = queue.getPrintQueue();
console.log(str); 

//TYPES OF QUEUES 
//There are four types of queues name 1.SimpleQueue 2.CircularQueue 3.PrioriyQueue 4.DoubleEndedQueue

//1.Simple Queue

class SimpleQueue {
    constructor(){
        this.items={};
        this.backIndex=0;
        this.frontIndex=0;
    }

    enqueue(item){
        this.items[this.backIndex]=item;
        this.backIndex++;

        return `item ${item} inserted`
    }

    dequeue(){
        const item =this.items[this.frontIndex];
        this.frontIndex++;

        return item;
    }

    peek(){
        return this.items[this.frontIndex];
    }

    getPrintqueue(){
        return this.items;
    }
} 


//CIRCULAR QUEUE 
/*
Operations on Circular Queue
Enqueue: Add an element to the rear of the queue.
Dequeue: Remove an element from the front of the queue.
isFull: Check if the queue is full.
isEmpty: Check if the queue is empty.
Front: It will return the first element of the circular queue.
Rear: It will return the last element of the circular queue.
How to Implement a Circular Queue using Array in JavaScript?
To implement a circular queue using an array in JavaScript, follow these steps:

Initialize an array named queue of size n, where n is the maximum number of elements the queue can hold.
Initialize two variables, front and rear, both set to -1 initially.
Enqueue Operation:
To enqueue an element x into the queue:

Increment rear by 1.
If rear equals n, set rear to 0 (wrap around).
If front is -1, set front to 0.
Set queue[rear] to x.
Dequeue Operation:
To dequeue an element from the queue:

Check if the queue is empty by verifying if front is -1. If it is, return an error message indicating that the queue is empty.
Set x to queue[front].
If front equals rear, set both front and rear to -1.
Otherwise, increment front by 1, and if front equals n, set front to 0 (wrap around).
Return x.
Example: The below code implements the circular queue and performs operations on it.
*/

class CircularQueue{
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.frontIndex = -1;
        this.rear = -1;
    }

    isfull(){
        return(this.front === 0 && this.rear === this.size-1) || (this.rear ===(this.front-1+this.size)%this.size);
    }
    isEmpty(){
        return this.front === -1;
    }

    enqueue(item){
        if(this.isfull()){
            console.log("The Queue is Full")
            return;
        }
        if(this.isEmpty()){
            this.front=0;
            this.rear=0;
        } else {
            this.rear=(this.rear+1)%
            this.size
        }
        this.queue[this.rear] = item;
        console.log(`${item} added to the queue`);
    }
    dequeue(){
        let item;
        if(this.isEmpty()){
            console.log("The Queue is Empty")
            return;
        } 
        if(this.front ===this.rear){
            item = this.queue[this.front];
            this.front = -1;
            this.rear = -1;
        } else {
            item = thisqueue[this.front];
            this.front = (this.front+1)%this.size;
        }
        console.log(`${item} removed from the queue`);
        return item;
    }
    displayQueue(){
        if(this.isEmpty()){
            console.log("The Queue is Empty")
            return;
        }
        let i = this.front;
        do {
            console.log(this.queue[i]);
            i=(i+1)% this.size;
        } while(i !==(this.rear+1) % this.size)
    }
    getFront(){
        if(this.isEmpty()){
            console.log("The Queue is Empty")
            return;
        }
        console.log(`Front element: ${this.queue[this.front]}`);
    }
    getRear(){
        if(this.isEmpty()){
            console.log("The Queue is Empty");
            return;
        }
        console.log(`Rear element: ${this.queue[this.rear]}`);
    }
}

const queue1 = new CircularQueue(5);
console.log(
    "Is the queue empty? ", 
    queue1.isEmpty());
console.log(
    "Is the queue full? ", 
    queue1.isFull());
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
console.log(
    "Is the queue empty? ", 
    queue1.isEmpty());
console.log(
    "Is the queue full? ", 
    queue1.isFull());
queue1.displayQueue();
queue1.dequeue();
queue1.dequeue();
queue1.displayQueue();
queue1.getFront();
queue1.getRear();
