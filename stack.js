"use strict";

class Stack{
    constructor(){
        this.items=[];
    }

    push(number){
        this.items.push(number);
    }

    pop(){
        if(this.items.length===0){
            return "The Stack is empty";
        }
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

}

let stack=new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.size());
stack.pop();

console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());