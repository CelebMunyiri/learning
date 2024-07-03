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


